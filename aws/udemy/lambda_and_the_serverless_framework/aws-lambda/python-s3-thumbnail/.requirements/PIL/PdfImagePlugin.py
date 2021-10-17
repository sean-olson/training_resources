#
# The Python Imaging Library.
# $Id$
#
# PDF (Acrobat) file handling
#
# History:
# 1996-07-16 fl   Created
# 1997-01-18 fl   Fixed header
# 2004-02-21 fl   Fixes for 1/L/CMYK images, etc.
# 2004-02-24 fl   Fixes for 1 and P images.
#
# Copyright (c) 1997-2004 by Secret Labs AB.  All rights reserved.
# Copyright (c) 1996-1997 by Fredrik Lundh.
#
# See the README file for information on usage and redistribution.
#

##
# Image plugin for PDF images (output only).
##

from . import Image, ImageFile, ImageSequence, PdfParser
import io

__version__ = "0.5"


#
# --------------------------------------------------------------------

# object ids:
#  1. catalogue
#  2. pages
#  3. image
#  4. page
#  5. page contents


def _save_all(im, fp, filename):
    _save(im, fp, filename, save_all=True)


##
# (Internal) Image save plugin for the PDF format.

def _save(im, fp, filename, save_all=False):
    resolution = im.encoderinfo.get("resolution", 72.0)
    is_appending = im.encoderinfo.get("append", False)
    title = im.encoderinfo.get("title", None)
    author = im.encoderinfo.get("author", None)
    subject = im.encoderinfo.get("subject", None)
    keywords = im.encoderinfo.get("keywords", None)
    creator = im.encoderinfo.get("creator", None)
    producer = im.encoderinfo.get("producer", None)

    if is_appending:
        existing_pdf = PdfParser.PdfParser(f=fp, filename=filename, mode="r+b")
    else:
        existing_pdf = PdfParser.PdfParser(f=fp, filename=filename, mode="w+b")

    if title:
        existing_pdf.info.Title = title
    if author:
        existing_pdf.info.Author = author
    if subject:
        existing_pdf.info.Subject = subject
    if keywords:
        existing_pdf.info.Keywords = keywords
    if creator:
        existing_pdf.info.Creator = creator
    if producer:
        existing_pdf.info.Producer = producer

    #
    # make sure image data is available
    im.load()

    existing_pdf.start_writing()
    existing_pdf.write_header()
    existing_pdf.write_comment("created by PIL PDF driver " + __version__)

    #
    # pages
    ims = [im]
    if save_all:
        append_images = im.encoderinfo.get("append_images", [])
        for append_im in append_images:
            append_im.encoderinfo = im.encoderinfo.copy()
            ims.append(append_im)
    numberOfPages = 0
    image_refs = []
    page_refs = []
    contents_refs = []
    for im in ims:
        im_numberOfPages = 1
        if save_all:
            try:
                im_numberOfPages = im.n_frames
            except AttributeError:
                # Image format does not have n_frames. It is a single frame image
                pass
        numberOfPages += im_numberOfPages
        for i in range(im_numberOfPages):
            image_refs.append(existing_pdf.next_object_id(0))
            page_refs.append(existing_pdf.next_object_id(0))
            contents_refs.append(existing_pdf.next_object_id(0))
            existing_pdf.pages.append(page_refs[-1])

    #
    # catalog and list of pages
    existing_pdf.write_catalog()

    pageNumber = 0
    for imSequence in ims:
        for im in ImageSequence.Iterator(imSequence):
            # FIXME: Should replace ASCIIHexDecode with RunLengthDecode (packbits)
            # or LZWDecode (tiff/lzw compression).  Note that PDF 1.2 also supports
            # Flatedecode (zip compression).

            bits = 8
            params = None

            if im.mode == "1":
                filter = "ASCIIHexDecode"
                colorspace = PdfParser.PdfName("DeviceGray")
                procset = "ImageB"  # grayscale
                bits = 1
            elif im.mode == "L":
                filter = "DCTDecode"
                # params = "<< /Predictor 15 /Columns %d >>" % (width-2)
                colorspace = PdfParser.PdfName("DeviceGray")
                procset = "ImageB"  # grayscale
            elif im.mode == "P":
                filter = "ASCIIHexDecode"
                palette = im.im.getpalette("RGB")
                colorspace = [PdfParser.PdfName("Indexed"), PdfParser.PdfName("DeviceRGB"), 255, PdfParser.PdfBinary(palette)]
                procset = "ImageI"  # indexed color
            elif im.mode == "RGB":
                filter = "DCTDecode"
                colorspace = PdfParser.PdfName("DeviceRGB")
                procset = "ImageC"  # color images
            elif im.mode == "CMYK":
                filter = "DCTDecode"
                colorspace = PdfParser.PdfName("DeviceCMYK")
                procset = "ImageC"  # color images
            else:
                raise ValueError("cannot save mode %s" % im.mode)

            #
            # image

            op = io.BytesIO()

            if filter == "ASCIIHexDecode":
                if bits == 1:
                    # FIXME: the hex encoder doesn't support packed 1-bit
                    # images; do things the hard way...
                    data = im.tobytes("raw", "1")
                    im = Image.new("L", (len(data), 1), None)
                    im.putdata(data)
                ImageFile._save(im, op, [("hex", (0, 0)+im.size, 0, im.mode)])
            elif filter == "DCTDecode":
                Image.SAVE["JPEG"](im, op, filename)
            elif filter == "FlateDecode":
                ImageFile._save(im, op, [("zip", (0, 0)+im.size, 0, im.mode)])
            elif filter == "RunLengthDecode":
                ImageFile._save(im, op, [("packbits", (0, 0)+im.size, 0, im.mode)])
            else:
                raise ValueError("unsupported PDF filter (%s)" % filter)

            #
            # Get image characteristics

            width, height = im.size

            existing_pdf.write_obj(image_refs[pageNumber], stream=op.getvalue(),
                Type=PdfParser.PdfName("XObject"),
                Subtype=PdfParser.PdfName("Image"),
                Width=width,  # * 72.0 / resolution,
                Height=height,  # * 72.0 / resolution,
                Filter=PdfParser.PdfName(filter),
                BitsPerComponent=bits,
                DecodeParams=params,
                ColorSpace=colorspace)

            #
            # page

            existing_pdf.write_page(page_refs[pageNumber],
                Resources=PdfParser.PdfDict(
                    ProcSet=[PdfParser.PdfName("PDF"), PdfParser.PdfName(procset)],
                    XObject=PdfParser.PdfDict(image=image_refs[pageNumber])),
                MediaBox=[0, 0, int(width * 72.0 / resolution), int(height * 72.0 / resolution)],
                Contents=contents_refs[pageNumber]
                )

            #
            # page contents

            page_contents = PdfParser.make_bytes(
                "q %d 0 0 %d 0 0 cm /image Do Q\n" % (
                    int(width * 72.0 / resolution),
                    int(height * 72.0 / resolution)))

            existing_pdf.write_obj(contents_refs[pageNumber], stream=page_contents)

            pageNumber += 1

    #
    # trailer
    existing_pdf.write_xref_and_trailer()
    if hasattr(fp, "flush"):
        fp.flush()
    existing_pdf.close()

#
# --------------------------------------------------------------------


Image.register_save("PDF", _save)
Image.register_save_all("PDF", _save_all)

Image.register_extension("PDF", ".pdf")

Image.register_mime("PDF", "application/pdf")

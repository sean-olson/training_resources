import { Component, Input } from '@angular/core';

@Component({
    selector: 'play-overlay',
    template: `
    <div>
        <i class="fa fa-play"></i>
    </div>
    `,
    styles: [
        `div {
            background-color: rgba(0, 0, 0, 0.8);
            width:120px;
            height:100px;
            font-size: 3.2em;
            cursor: pointer;
            border-radius: 6px;
            text-align: center;
            position:absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
        }
        .fa {
            display: block;
            margin-top: 1.5rem;
        }
        `
    ]
})
export class PlayOverlayComponent {
    @Input() isHidden:string = 'false';
}
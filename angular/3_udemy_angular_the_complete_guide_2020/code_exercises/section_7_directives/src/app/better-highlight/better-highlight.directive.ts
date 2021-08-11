import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() hoverColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private el: ElementRef ,private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.hoverColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}

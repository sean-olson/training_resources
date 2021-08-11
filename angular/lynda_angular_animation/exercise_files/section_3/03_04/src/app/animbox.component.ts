import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'animbox',
  template: `<div [@changeState]="currentState" class="mybox mx-auto"></div>`,
  styles: [`
    .mybox {
        background-color: #47748f;
        width: 200px;
        height: 200px;
        border-radius: 6px;
        margin: 6rem;
    }
  `],
  animations: [
        trigger('changeState', [
            state('original', style({
                backgroundColor: '#47748f',
                transform: 'scale(1)'
            })),
            state('basic', style({
                backgroundColor: '#440000',
                transform: 'scale(2)'
            })),
            transition('* => basic', animate('800ms')),
            transition('* => original', animate('200ms'))
        ])
    ]
})
export class AnimboxComponent {
    @Input() currentState;
}
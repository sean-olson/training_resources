import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'mouse',
  template: `
    <div class="mymouse mx-auto" (mouseenter)="setMouse('hover')" (mousedown)="setMouse('press')" (mouseleave)="setMouse('rest')" [@changeState]="currentState"></div>
  `,
  styles: [`
    .mymouse {
        background-color: #5c8f52;
        width: 200px;
        height: 200px;
        border-radius: 200px;
        margin: 6rem;
    }
  `],
  animations: [
        trigger('changeState', [
            state('rest', style({
                transform: 'scale(1)'
            })),
            state('hover',   style({
                transform: 'scale(1.2)'
            })),
            state('press',   style({
                transform: 'scale(1.2)',
                backgroundColor: '#8f5a7a'
            })),
            transition('rest => hover', animate('400ms ease-in')),
            transition('hover => rest', animate('200ms ease-out')),
            transition('hover => press', animate('400ms ease-in')),
            transition('press => rest', animate('200ms ease-out'))
        ])
    ]
})
export class MouseComponent {
    currentState = "rest";
    setMouse(state) {
        this.currentState = state;
    }
}
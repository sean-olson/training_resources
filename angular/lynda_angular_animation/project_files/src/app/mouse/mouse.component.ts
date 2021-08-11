import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.scss'],
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
export class MouseComponent implements OnInit {

  currentState = "rest";

  constructor() { }
  ngOnInit() {
  }

  setMouse(state) {
    this.currentState = state;
}  

}

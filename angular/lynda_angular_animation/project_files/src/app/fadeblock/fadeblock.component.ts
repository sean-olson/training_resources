import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';
import { fadeAnimation } from '../animations';

@Component({
  selector: 'app-fadeblock',
  templateUrl: './fadeblock.component.html',
  styles: [`
    .fadeBlock {
        background-color: #ec971f;
        width: 600px;
        height: 300px;
        border-radius: 4px;
        margin: 5rem;
        opacity: 0;
    }
  `],
    animations: [
      trigger('changeState', [
        transition('void => *', [
          useAnimation(fadeAnimation)
        ])
      ])
    ]
  })
export class FadeblockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

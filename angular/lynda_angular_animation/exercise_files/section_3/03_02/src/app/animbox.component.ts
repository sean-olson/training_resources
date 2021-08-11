import { Component } from '@angular/core';

@Component({
  selector: 'animbox',
  template: `<div class="mybox mx-auto"></div>`,
  styles: [`
    .mybox {
        background-color: #47748f;
        width: 200px;
        height: 200px;
        border-radius: 6px;
        margin: 6rem;
    }
  `]
})
export class AnimboxComponent {}
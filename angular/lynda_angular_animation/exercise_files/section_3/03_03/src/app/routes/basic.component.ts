import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Animation Basics</h1>
      <div class="container-fluid">
          <div class="row">
              <div class="col-5">
                <div class="btn-group-vertical btn-block" style="margin-top:1rem;">
                    <a (click)="setState('original')" class="btn btn-primary active">Return to Original</a>
                    <a (click)="setState('basic')" class="btn btn-primary">Animation</a>
                </div>
              </div>
              <div class="col-7">
                <animbox></animbox>
              </div>
          </div>
      </div>
  `,
  styles: [``]
})
export class BasicComponent {
    switchstate = 'original';
    setState(state) {
        this.switchstate = state;
        console.log(state);
    }
}
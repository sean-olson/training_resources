import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './partials/app.html' 
})

export class AppComponent {
  name: string;
  artists: any[];

  constructor(){
    this.name = 'Sean Olson';
    this.artists = [
      {name: 'Brian Rosenberg', school: 'RSA'},
      {name: 'Claudia Wang', school: 'Design Center'},
      {name: 'Brian Styfle', school: 'Art Center'},            
      ];
  }
}
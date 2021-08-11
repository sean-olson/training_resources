import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countArray: number[] =  [];

  onCountStarted() {
    this.countArray = [];
  }
  onCountStopped(count_array: number[]){
    this.countArray = count_array;
  }
}

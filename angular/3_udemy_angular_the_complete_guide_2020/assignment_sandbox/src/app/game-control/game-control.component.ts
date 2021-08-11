import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  count: number[] = [];
  countIntervalId: any;

  @Output('cntStarted') onCountStarted = new EventEmitter()
  @Output('cntStopped') onCountStopped = new EventEmitter<number[]>()

  constructor() { }

  ngOnInit() {
  }

  onStartCount(){
    this.count = [];
    this.onCountStarted.emit();
    this.countIntervalId = setInterval(()=>{
      this.count.push(this.count.length + 1);
      console.log(`The count is ${this.count[this.count.length - 1]}`);
    }, 1000);
  }

  onStopCount(){
    clearInterval(this.countIntervalId);
    this.onCountStopped.emit(this.count);
  }
}

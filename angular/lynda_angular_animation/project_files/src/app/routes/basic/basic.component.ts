import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  switchstate: string = 'original';

  constructor() { }

  ngOnInit() {
  }

  setState(state: string){
    this.switchstate = state;    
  }

}

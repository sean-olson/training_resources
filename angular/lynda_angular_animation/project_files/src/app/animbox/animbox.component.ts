import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, animate, transition, keyframes, group} from '@angular/animations'

@Component({
  selector: 'app-animbox',
  templateUrl: './animbox.component.html',
  styleUrls: ['./animbox.component.scss'],
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
      state('delaying', style({
        backgroundColor: '#812170',
        transform: 'scale(1.6)'        
      })),
      state('easing', style({
        backgroundColor: '#985b00',
        transform: 'scale(2.2)'        
      })),   
      state('stepped', style({
        backgroundColor: '#549a76',
        transform: 'scale(1)'        
      })),  
      state('parallel', style({
        backgroundColor: '#065e65',
        transform: 'scale(0.4)', 
        borderRadius: '50%'       
      })),                      
      transition('* => basic', animate('800ms')),
      transition('* => delaying', animate('800ms 1200ms ease-out')),
      transition('* => easing', animate('800ms ease-in-out')),
      transition('* => original', animate('200ms')),
      transition('* => stepped', animate('3000ms ease-in-out', keyframes([
        style({backgroundColor: '#dd9344', transform: 'scale(1.4)', offset: 0.2}),
        style({backgroundColor: '#5c2346', transform: 'scale(0.8)', offset: 0.4}),
        style({backgroundColor: '#1b1b1b', transform: 'scale(1.2)', offset: 0.6}),
        style({backgroundColor: '#549a76', transform: 'scale(1)', offset: 0.8})        
      ]))),
      transition('* => parallel', [
        group([
          animate('200ms ease-out', style({
            backgroundColor: '#065e65'
          })),
          animate('1000ms ease-out', style({
            transform: 'scale(0.4)'
          })),
          animate('2000ms ease-out', style({
            borderRadius: '50%'
          }))          
        ])
      ])
    ])
  ]
})
export class AnimboxComponent implements OnInit {

  @Input() currentState: string;
  msg: string = '';

  constructor() { }

  ngOnInit() {
  }

  animationBegin(e: any){
    this.msg = e.phaseName + ": " + e.fromState + " => " + e.toState + " [" + e.totalTime + "]";
  }

  animationEnd(e: any){
    this.msg = e.phaseName + ": " + e.fromState + " => " + e.toState + " [" + e.totalTime + "]";
  }

}

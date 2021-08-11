import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss'],
  animations: [
    trigger('spoonAnimation', [
        transition('* => *', [
            query(':enter', style({ opacity: 0, backgroundColor: 'red' }), { optional: true }),
            query(':enter', stagger('100ms', [
                animate('1s', style({ opacity: 1,backgroundColor: 'green' }))
            ]), { optional: true })
        ])
    ])
  ]
})
export class AdvancedComponent implements OnInit {

  spoons: {}[] = [];
  constructor() { }

  ngOnInit() {
  }

  showSpoons() {
      this.spoons = [     
      { id: '1', name: 'Absinthe' },
      { id: '2', name: 'Boulion' },
      { id: '3', name: 'Caviar' },
      { id: '4', name: 'Coffee' },
      { id: '5', name: 'Dessert' },
      { id: '6', name: 'Egg' },
      { id: '7', name: 'Horn' },
      { id: '8', name: 'Iced Tea' },
      { id: '9', name: 'Marrow' },
      { id: '10', name: 'Melon' },
      { id: '11', name: 'Parfait' },
      { id: '12', name: 'Salt' },
      { id: '13', name: 'Saucier' },
      { id: '14', name: 'Soup' } 
    ]
  }  

}

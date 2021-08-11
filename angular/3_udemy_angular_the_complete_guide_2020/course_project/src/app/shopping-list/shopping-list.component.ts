import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @Input() activeView: string;

  ingredients: Ingredient[] = [
    new Ingredient('package hotdog buns', 1),
    new Ingredient('package hotdogs', 1),
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(params: Object){
    this.ingredients.push(
      new Ingredient(params['name'], params['amount'])
    );
  }

}

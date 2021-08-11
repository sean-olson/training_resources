import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() onLoadRecipe: EventEmitter<Recipe> = new EventEmitter();

  recipes: Recipe[] = [
    new Recipe('American Hot Dog', 'A delicious hot dog with mustard, ketchup and relish', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Hotdog_-_Evan_Swigart.jpg'),
    new Recipe('Classic Chili-Cheese Burger', 'A delicious Chili Burger with Cheese', 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Tomboy%27s_chili-cheeseburger_with_fries.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe){
    this.onLoadRecipe.emit(recipe);
  }
}

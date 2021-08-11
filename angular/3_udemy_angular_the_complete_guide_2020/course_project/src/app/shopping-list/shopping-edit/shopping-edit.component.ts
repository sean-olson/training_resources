import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @Output() onAddIngredient: EventEmitter<{name: String, amount: Number}> = new EventEmitter();
  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addIngredient(){    
    this.onAddIngredient.emit(
      {
        name: this.nameInput.nativeElement.value, 
        amount: this.amountInput.nativeElement.value}
    );
  }
}

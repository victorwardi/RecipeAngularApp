import {Component} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients = [
    new Ingredient('Flour', 10),
    new Ingredient('Lemon', 2 ),
    new Ingredient('Egg', 5),
    new Ingredient('Milk', 300),
    new Ingredient('Butter', 2),
  ];


}

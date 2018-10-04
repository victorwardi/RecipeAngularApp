import {Component} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector : 'app-recipe-list',
  templateUrl : './recipe-list.component.html',
  styleUrls : ['./recipe-list.component.css']

})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe('Lemon Cake', 'A Delicious Lemon Cake', 'http://assets.kraftfoods.com/recipe_images/opendeploy/501217_1_1_retail-63b8ed08c02dec22198b0b77c0c1535d22074a87_642x428.jpg'),
    new Recipe('Lemon Cake', 'A Delicious Lemon Cake', 'http://assets.kraftfoods.com/recipe_images/opendeploy/501217_1_1_retail-63b8ed08c02dec22198b0b77c0c1535d22074a87_642x428.jpg'),
    new Recipe('Lemon Cake', 'A Delicious Lemon Cake', 'http://assets.kraftfoods.com/recipe_images/opendeploy/501217_1_1_retail-63b8ed08c02dec22198b0b77c0c1535d22074a87_642x428.jpg'),
    new Recipe('Lemon Cake', 'A Delicious Lemon Cake', 'http://assets.kraftfoods.com/recipe_images/opendeploy/501217_1_1_retail-63b8ed08c02dec22198b0b77c0c1535d22074a87_642x428.jpg'),
    new Recipe('Lemon Cake', 'A Delicious Lemon Cake', 'http://assets.kraftfoods.com/recipe_images/opendeploy/501217_1_1_retail-63b8ed08c02dec22198b0b77c0c1535d22074a87_642x428.jpg'),
  ];

}

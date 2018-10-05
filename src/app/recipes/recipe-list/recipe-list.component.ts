import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']

})
export class RecipeListComponent {

  @Output() recipeSelectedOnList = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Lemon Cake', 'A Delicious Lemon Cake', 'http://assets.kraftfoods.com/recipe_images/opendeploy/501217_1_1_retail-63b8ed08c02dec22198b0b77c0c1535d22074a87_642x428.jpg'),
    new Recipe('Easy Tuna Pasta Bake', 'Try this amazing pasta', 'https://images.media-allrecipes.com/userphotos/300x300/5730682.jpg'),
    new Recipe('The Best Marinade Around', 'A yummy recipe', 'https://images.media-allrecipes.com/userphotos/300x300/800834.jpg'),
    new Recipe('Banana Cinnamon Roll Casserole', 'One of the best dessert ever', 'https://images.media-allrecipes.com/userphotos/300x300/3397499.jpg'),
  ];

  onRecipeSelected(recipeSelected: Recipe) {
    this.recipeSelectedOnList.emit(recipeSelected);
  }

}

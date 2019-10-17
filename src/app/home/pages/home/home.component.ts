import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {RecipeSearchModel} from '../../../shared/models/recipe-search.model';
import {RecipeModel} from '../../../shared/models/recipe.model';
import {RecipeService} from '../../../shared/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipeSearch$ = new BehaviorSubject<RecipeSearchModel>(null);
  recipes$: Observable<RecipeModel[]>;

  ingredients = [];

  addIngredientsFormGroup = new FormGroup({
    ingredient: new FormControl(null, [])
  });

  constructor(
      private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.recipes$ = this.recipeSearch$.pipe(
        filter(value => !(!value)),
        map(recipeSearch => {
          return recipeSearch.hits.map(r => r.recipe);
        })
    );
  }

  addIngredient() {
    const ingredient = this.addIngredientsFormGroup.get('ingredient');

    if (ingredient.value) {
      if (!this.ingredients.find(i => i === ingredient.value)) {
        this.ingredients.push(ingredient.value);
      }
      ingredient.reset();
    }

    this.getRecipes();
  }

  deleteIngredient(ingredient: string) {
    this.ingredients = this.ingredients.filter(i => i !== ingredient);

    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.recipeSearch(this.ingredients.join(',')).subscribe(recipeSearch => {
      this.recipeSearch$.next(recipeSearch);
    });
  }

  getRecipeIDFromURI(uri: string) {
    const uriArray = uri.split('_');
    return uriArray[uriArray.length - 1];
  }
}

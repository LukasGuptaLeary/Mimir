import { Component, OnInit } from '@angular/core';

import { RECIPES } from './mock-recipe';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipes = RECIPES;
  ingredients = [];

  addIngredientsFormGroup = new FormGroup({
    ingredient: new FormControl(null, [])
  });

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const ingredient = this.addIngredientsFormGroup.get('ingredient');

    if (ingredient.value) {
      if (!this.ingredients.find(i => i === ingredient.value)) {
        this.ingredients.push(ingredient.value);
      }
      ingredient.reset();
    }
  }

  deleteIngredient(ingredient: string) {
    this.ingredients = this.ingredients.filter(i => i !== ingredient);
  }
}

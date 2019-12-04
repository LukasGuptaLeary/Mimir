import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {filter, map} from 'rxjs/operators';
import {RecipeModel} from '../../../shared/models/recipe.model';
import {RecipeService} from '../../../shared/recipe.service';
import {RecipeSearchModel} from '../../../shared/models/recipe-search.model';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  recipeSearch$ = new BehaviorSubject<RecipeSearchModel>(null);
  recipes$: Observable<RecipeModel[]>;


  recipes = [];


  addRecipeFormGroup = new FormGroup({
    recipe: new FormControl(null, [])
  });

  constructor(private recipeService: RecipeService,
              private auth: AngularFireAuth,
              private db: AngularFirestore) { }

  ngOnInit() {

  }

  addFavorite(recipe: RecipeModel) {
    const recipe = this.addRecipeFormGroup.get('recipe');

   
    
  }

  getRecipeIDFromURI(uri: string) {
    const uriArray = uri.split('_');
    return uriArray[uriArray.length - 1];
  }

  getRecipes() {
    this.recipeService.recipeSearch().subscribe(recipeSearch => {
      this.recipeSearch$.next(recipeSearch);
    });
  }


}

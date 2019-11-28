import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeSearchModel } from './models/recipe-search.model';
import { tap } from 'rxjs/operators';
import {RecipeModel} from './models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
      private http: HttpClient
  ) { }

  recipeSearch() {
    return this.http.get<RecipeSearchModel>('https://api-dot-mimir-cd0bd.appspot.com/recipe');
  }

  getRecipe(r: string) {
    return this.http.get<RecipeModel>('https://api-dot-mimir-cd0bd.appspot.com/recipe/' + r);
  }
}

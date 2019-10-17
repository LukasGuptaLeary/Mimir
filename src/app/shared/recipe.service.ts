import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeSearchModel } from './models/recipe-search.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
      private http: HttpClient
  ) { }

  recipeSearch(q: string) {
    const params = new HttpParams().set('q', q);
    return this.http.get<RecipeSearchModel>('https://api-dot-mimir-cd0bd.appspot.com/recipe', {params}).pipe(tap(console.log));
  }
}

import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {filter, map} from 'rxjs/operators';
import {RecipeModel} from '../../../shared/models/recipe.model';
import {RecipeService} from '../../../shared/recipe.service';
import {RecipeSearchModel} from '../../../shared/models/recipe-search.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {


  recipe = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

  }



}

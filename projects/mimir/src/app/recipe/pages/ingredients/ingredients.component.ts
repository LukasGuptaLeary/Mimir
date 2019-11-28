import {ActivatedRoute, ParamMap} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {RecipeModel} from '../../../shared/models/recipe.model';
import {RecipeSearchModel} from '../../../shared/models/recipe-search.model';
import {RecipeService} from '../../../shared/recipe.service';
import {switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  recipeSearch$ = new BehaviorSubject<RecipeSearchModel>(null);
  recipe$: Observable<RecipeModel>;
  ingredientList: string[];

  constructor(
    private route: ActivatedRoute,
    private service: RecipeService
  ) {}

ngOnInit() {
  this.recipe$ = this.route.parent.paramMap.pipe(
    switchMap((params: ParamMap) =>
      this.service.getRecipe(params.get('r'))
    )
  );

  this.recipe$.subscribe(recipe =>
    this.ingredientList = recipe.ingredients.map(
      ingredient => ingredient.text
    )
  );
}

}

import {ActivatedRoute, ParamMap} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {RecipeModel} from '../../../shared/models/recipe.model';
import {RecipeSearchModel} from '../../../shared/models/recipe-search.model';
import {RecipeService} from '../../../shared/recipe.service';
import {Router} from '@angular/router';
import {switchMap, sampleTime} from 'rxjs/operators';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  recipeSearch$ = new BehaviorSubject<RecipeSearchModel>(null);
  recipe$: Observable<RecipeModel>;
  ingredientList = [];
  recipeId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RecipeService
  ) {}

ngOnInit() {
  this.recipeId = '';
  
  let r;
  this.route.params.subscribe(params => r = params['r']);
  if (r){
    this.recipeId = '/' + r;
  }

  this.recipe$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
      this.service.getRecipe(params.get('r')))
  );

  this.recipe$.subscribe(recipe =>
    recipe.ingredients.forEach(ingredient =>
      this.ingredientList.push(
        { item: ingredient.text, qty: ingredient.weight }
      )
    )
  )

  if (this.ingredientList.length < 1){
    this.ingredientList.push({item: 'No Ingredients Added.', qty: 'N/A'});
  }
}

goDown() {
  this.router.navigate(['./recipe/instructions' + this.recipeId]);
}

}
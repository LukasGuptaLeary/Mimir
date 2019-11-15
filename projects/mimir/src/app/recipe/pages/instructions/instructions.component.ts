import {ActivatedRoute, ParamMap} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {RecipeModel} from '../../../shared/models/recipe.model';
import {RecipeSearchModel} from '../../../shared/models/recipe-search.model';
import {RecipeService} from '../../../shared/recipe.service';
import {Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  recipeSearch$ = new BehaviorSubject<RecipeSearchModel>(null);
  recipe$: Observable<RecipeModel>;
  recipeId: string;
  recipeUrl: string;

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
      this.recipeUrl = recipe.url
    );
  }

  goUp() {
    this.router.navigate(['./recipe/ingredients' + this.recipeId]);
  }

  goDown() {
    this.router.navigate(['./recipe/review']);
  }
}

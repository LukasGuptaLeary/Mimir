import {ActivatedRoute, ParamMap} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {RecipeModel} from '../../../shared/models/recipe.model';
import {RecipeSearchModel} from '../../../shared/models/recipe-search.model';
import {RecipeService} from '../../../shared/recipe.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  recipeSearch$ = new BehaviorSubject<RecipeSearchModel>(null);
  recipe$: Observable<RecipeModel>;
  recipeUrl: string;

  constructor(
    private route: ActivatedRoute,
    private service: RecipeService
  ) {}


  ngOnInit() {
    this.recipe$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getRecipe(params.get('r')))
    );
  
    this.recipe$.subscribe(recipe => 
      this.recipeUrl = recipe.url
    );
  }

}

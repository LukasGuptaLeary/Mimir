import { Component, OnInit } from '@angular/core';
import {FormControl, FormControlName} from '@angular/forms';
import {filter, map} from 'rxjs/operators';
import {RecipeSearchModel} from '../../../shared/models/recipe-search.model';
import {RecipeModel} from '../../../shared/models/recipe.model';
import {RecipeService} from '../../../shared/recipe.service';


export interface Diet {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  health = new FormControl();


  diets: Diet[] = [
    {value: '', viewValue: 'None'},
    {value: '', viewValue: 'Balanced'},
    {value: '', viewValue: 'High-Protein'},
    {value: '', viewValue: 'High-Fiber'},
    {value: '', viewValue: 'Low-Fat'},
    {value: '', viewValue: 'Low-Carb'},
    {value: '', viewValue: 'Low-sodium'},
  ];

  healths: string[] = ['Alcohol', 'Alcohol-free', 'Celery-free', 'Crustcean-free',
    'Dairy', 'Eggs', 'Fish', 'Gluten', 'Keto',  'Kidney friendly', 'Kosher', 'Low potassium',
    'Lupine-free', 'Mustard-free', 'No oil added', 'No-sugar', 'Paleo', 'Peanuts', 'Pescatarian',
    'Pork-free', 'Red meat-free', 'Sesame-free', 'Shellfish', 'Soy', 'Sugar-conscious', 'Tree Nuts',
    'Vegan', 'Vegetarian', 'Wheat-free'];

  constructor() { }

  ngOnInit() {
  }



}

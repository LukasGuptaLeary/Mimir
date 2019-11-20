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

export interface Health{
  value: string;
  viewValue: string;
}

export interface MealType {
  value: string;
  viewValue: string;
};

export interface CuisineType {
  value: string;
  viewValue: string;
};

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {



  constructor() { }

  health = new FormControl();
  mealType = new FormControl();
  cuisineType = new FormControl();

  diets: Diet[] = [
    {value: '', viewValue: 'None'},
    {value: '', viewValue: 'Balanced'},
    {value: '', viewValue: 'High-Protein'},
    {value: '', viewValue: 'High-Fiber'},
    {value: '', viewValue: 'Low-Fat'},
    {value: '', viewValue: 'Low-Carb'},
    {value: '', viewValue: 'Low-sodium'},
  ];

  healths: Health[] = [
    {value: '', viewValue: 'Alcohol'},
    {value: '', viewValue: 'Alcohol-free'},
    {value: '', viewValue: 'Celery-free'},
    {value: '', viewValue: 'Crustcean-free'},
    {value: '', viewValue: 'Dairy'},
    {value: '', viewValue: 'Eggs'},
    {value: '', viewValue: 'Fish'},
    {value: '', viewValue: 'Gluten'},
    {value: '', viewValue: 'Keto'},
    {value: '', viewValue: 'Kidney friendly'},
    {value: '', viewValue: 'Kosher'},
    {value: '', viewValue: 'Low potassium'},
    {value: '', viewValue: 'Lupine-free'},
    {value: '', viewValue: 'Mustard-free'},
    {value: '', viewValue: 'No oil added'},
    {value: '', viewValue: 'No-sugar'},
    {value: '', viewValue: 'Paleo'},
    {value: '', viewValue: 'Peanuts'},
    {value: '', viewValue: 'Pescatarian'},
    {value: '', viewValue: 'Pork-free'},
    {value: '', viewValue: 'Red meat-free'},
    {value: '', viewValue: 'Sesame-free'},
    {value: '', viewValue: 'Soy'},
    {value: '', viewValue: 'Shellfish'},
    {value: '', viewValue: 'Sugar-conscious'},
    {value: '', viewValue: 'Tree Nuts'},
    {value: '', viewValue: 'Vegan'},
    {value: '', viewValue: 'Vegetarian'},
    {value: '', viewValue: 'Wheat-free'},
   ];

  mealTypes: MealType[] = [
    {value: '', viewValue: 'Breakfast'},
    {value: '', viewValue: 'Lunch'},
    {value: '', viewValue: 'Dinner'},
    {value: '', viewValue: 'Snack'},
    {value: '', viewValue: 'Bread'},
    {value: '', viewValue: 'Cereals'},
    {value: '', viewValue: 'Condiments and sauces'},
    {value: '', viewValue: 'Drinks'},
    {value: '', viewValue: 'Desserts'},
    {value: '', viewValue: 'Main course'},
    {value: '', viewValue: 'Salad'},
    {value: '', viewValue: 'Sandwiches'},
    {value: '', viewValue: 'Side dish'},
    {value: '', viewValue: 'Soup'},
    {value: '', viewValue: 'Starter'},
    {value: '', viewValue: 'Sweets'},
  ];

  cuisineTypes: CuisineType[] = [
    {value: '', viewValue: 'American'},
    {value: '', viewValue: 'Asian'},
    {value: '', viewValue: 'Dinner'},
    {value: '', viewValue: 'British'},
    {value: '', viewValue: 'Caribbean'},
    {value: '', viewValue: 'Central Europe'},
    {value: '', viewValue: 'Chinese'},
    {value: '', viewValue: 'Eastern Europe'},
    {value: '', viewValue: 'French'},
    {value: '', viewValue: 'Indian'},
    {value: '', viewValue: 'Italian'},
    {value: '', viewValue: 'Japanese'},
    {value: '', viewValue: 'Kosher'},
    {value: '', viewValue: 'Mediterranean'},
    {value: '', viewValue: 'Mexican'},
    {value: '', viewValue: 'Middle Eastern'},
    {value: '', viewValue: 'Nordic'},
    {value: '', viewValue: 'South American'},
    {value: '', viewValue: 'South East Asian'},
  ];




  ngOnInit() {
  }



}

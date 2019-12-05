import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PreferenceModel } from '../../../shared/models/preference.model';
import {PreferencesModel} from '../../../shared/models/preferences.model';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  preferencesFormGroup = new FormGroup({
    diet: new FormControl(null),
    health: new FormControl(null),
    dishType: new FormControl(null),
    cuisineType: new FormControl(null)
  });

  diets: PreferenceModel[] = [
    {value: null, displayname: 'No Preference'},
    {value: 'balanced', displayname: 'Balanced'},
    {value: 'high-fiber', displayname: 'High-Fiber'},
    {value: 'high-protein', displayname: 'High-Protein'},
    {value: 'low-carb', displayname: 'Low-Carb'},
    {value: 'low-fat', displayname: 'Low-Fat'},
    {value: 'low-sodium', displayname: 'Low-Sodium'}
  ];

  healths: PreferenceModel[] = [
    {value: 'alcohol-free', displayname: 'Alcohol-Free'},
    {value: 'celery-free', displayname: 'Celery-Free'},
    {value: 'crustcean-free', displayname: 'Crustcean-Free'},
    {value: 'dairy-free', displayname: 'Dairy-Free'},
    {value: 'egg-free', displayname: 'Egg-Free'},
    {value: 'fat-free', displayname: 'Fat-Free'},
    {value: 'fish-free', displayname: 'Fish-Free'},
    {value: 'gluten-free', displayname: 'Gluten-Free'},
    {value: 'keto', displayname: 'Keto'},
    {value: 'kidney-friendly', displayname: 'Kidney Friendly'},
    {value: 'kosher', displayname: 'Kosher'},
    {value: 'low-potassium', displayname: 'Low Potassium'},
    {value: 'low-sugar', displayname: 'Low-Sugar'},
    {value: 'lupine-free', displayname: 'Lupine-Free'},
    {value: 'mustard-free', displayname: 'Mustard-Free'},
    {value: 'paleo', displayname: 'Paleo'},
    {value: 'peanut-free', displayname: 'Peanut-Free'},
    {value: 'pescatarian', displayname: 'Pescatarian'},
    {value: 'pork-free', displayname: 'Pork-Free'},
    {value: 'red-meat-free', displayname: 'Red Meat-Free'},
    {value: 'sesame-free', displayname: 'Sesame-Free'},
    {value: 'soy-free', displayname: 'Soy-Free'},
    {value: 'shellfish-free', displayname: 'Shellfish-Free'},
    {value: 'tree-nut-free', displayname: 'Tree Nut-Free'},
    {value: 'vegan', displayname: 'Vegan'},
    {value: 'vegetarian', displayname: 'Vegetarian'},
    {value: 'wheat-free', displayname: 'Wheat-Free'}
   ];

  dishTypes: PreferenceModel[] = [
    {value: 'bread', displayname: 'Bread'},
    {value: 'cereals', displayname: 'Cereals'},
    {value: 'condiments-and-sauces', displayname: 'Condiments and Sauces'},
    {value: 'drinks', displayname: 'Drinks'},
    {value: 'desserts', displayname: 'Desserts'},
    {value: 'main-course', displayname: 'Main Course'},
    {value: 'salad', displayname: 'Salad'},
    {value: 'sandwiches', displayname: 'Sandwiches'},
    {value: 'side-dish', displayname: 'Side Dish'},
    {value: 'soup', displayname: 'Soup'},
    {value: 'starter', displayname: 'Starter'},
    {value: 'sweets', displayname: 'Sweets'}
  ];

  cuisineTypes: PreferenceModel[] = [
    {value: 'american', displayname: 'American'},
    {value: 'asian', displayname: 'Asian'},
    {value: 'dinner', displayname: 'Dinner'},
    {value: 'british', displayname: 'British'},
    {value: 'caribbean', displayname: 'Caribbean'},
    {value: 'central-europe', displayname: 'Central Europe'},
    {value: 'chinese', displayname: 'Chinese'},
    {value: 'eastern-europe', displayname: 'Eastern Europe'},
    {value: 'french', displayname: 'French'},
    {value: 'indian', displayname: 'Indian'},
    {value: 'italian', displayname: 'Italian'},
    {value: 'japanese', displayname: 'Japanese'},
    {value: 'kosher', displayname: 'Kosher'},
    {value: 'mediterranean', displayname: 'Mediterranean'},
    {value: 'mexican', displayname: 'Mexican'},
    {value: 'middle Eastern', displayname: 'Middle Eastern'},
    {value: 'nordic', displayname: 'Nordic'},
    {value: 'south-american', displayname: 'South American'},
    {value: 'south-east-asian', displayname: 'South East Asian'}
  ];

  constructor(
      private auth: AngularFireAuth,
      private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.db.collection('user').doc(this.auth.auth.currentUser.uid).get().subscribe(user => {
      if (user.exists) {
        this.preferencesFormGroup.patchValue(user.data().preferences);
      }
    });

    this.preferencesFormGroup.valueChanges.subscribe(preferences => {
      this.db.collection('user').doc(this.auth.auth.currentUser.uid).set({
        preferences
      }, {merge: true});
    });
  }

  get preferences() {
    return this.preferencesFormGroup.value as PreferencesModel;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  header : string;
  ingredients : Array<string>;

  constructor() {
    this.header = "Ingredients"
    this.ingredients = ['rice', 'water', 'butter', 'salt'];
  }

  ngOnInit() {
  }

}

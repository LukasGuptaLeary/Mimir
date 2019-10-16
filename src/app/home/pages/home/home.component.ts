import { Component, OnInit } from '@angular/core';

import {RECIPES} from './mock-recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipes = RECIPES;
  constructor() {

  }

  ngOnInit() {
  }



}

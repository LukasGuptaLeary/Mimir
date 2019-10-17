import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from './recipe.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
      RecipeService
  ]
})
export class SharedModule { }

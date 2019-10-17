import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { ReviewComponent } from './pages/review/review.component';

@NgModule({
  declarations: [IngredientsComponent, RecipeComponent, InstructionsComponent, ReviewComponent],
  imports: [
    CommonModule,
    RecipeRoutingModule
  ],
})
export class RecipeModule { }

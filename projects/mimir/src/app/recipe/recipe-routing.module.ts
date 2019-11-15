import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { ReviewComponent } from './pages/review/review.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';


const routes: Routes = [
  {
    path: '', component: RecipeComponent, children: [
      { path: 'ingredients', component: IngredientsComponent },
      { path: 'ingredients/:r', component: IngredientsComponent },
      { path: 'instructions', component: InstructionsComponent },
      { path: 'instructions/:r', component: InstructionsComponent },
      { path: 'review', component: ReviewComponent },
      { path: '', redirectTo: 'ingredients', pathMatch: 'full' },
      { path: ':r', redirectTo: 'ingredients/:r', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }

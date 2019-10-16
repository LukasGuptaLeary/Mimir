import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { MaterialModulesModule } from '../material-modules/material-modules.module';


@NgModule({
  declarations: [IngredientsComponent],
  imports: [
    CommonModule,
    IngredientsRoutingModule,
    MaterialModulesModule
  ]
})
export class IngredientsModule { }
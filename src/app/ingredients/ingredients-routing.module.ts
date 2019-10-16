import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';


const routes: Routes = [
  { path: '', component: IngredientsComponent, children: [
      { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule ) },
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientsRoutingModule { }
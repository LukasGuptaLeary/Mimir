import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './pages/user/user.component';


const routes: Routes = [
  { path: '', component: UserComponent, children: [
      { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule ) },
      { path: 'recipe', loadChildren: () => import('../recipe/recipe.module').then(m => m.RecipeModule ) },
      { path: 'person', loadChildren: () => import('../person/person.module').then(m => m.PersonModule)},
      { path: 'favorite', loadChildren: () => import('../favorite/favorite.module').then(m => m.FavoriteModule)},
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

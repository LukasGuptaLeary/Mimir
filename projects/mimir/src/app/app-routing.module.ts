import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule ), pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule )},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule )},
  { path: 'recipe', loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipeModule )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule ), pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule )},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule )},
  { path: 'ingredients', loadChildren: () => import('./recipes/ingredients.module').then(m => m.IngredientsModule )},
  { path: 'instructions', loadChildren: () => import('./recipes/instructions.module').then(m => m.InstructionsModule )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

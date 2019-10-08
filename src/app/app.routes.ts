import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';
import { IngredientsComponent } from '@src/app/ingredients/ingredients.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
      path: 'ingredients',
      component: IngredientsComponent,
  },
];

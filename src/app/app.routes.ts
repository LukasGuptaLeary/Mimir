import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';
import { IngredientsComponent } from '@src/app/ingredients/ingredients.component';
import { EmbedPageComponent } from '@src/app/embed-page/embed-page.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/embed-page',
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
  {
      path: 'embed-page',
      component: EmbedPageComponent,
  },
];

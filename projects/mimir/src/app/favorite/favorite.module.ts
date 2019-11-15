import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FavoriteRoutingModule} from '../Favorite/favorite-routing.module';
import {SharedModule} from '../shared/shared.module';
import { FavoriteComponent } from './pages/favorite/favorite.component';



@NgModule({
  declarations: [FavoriteComponent],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    SharedModule
  ]
})
export class FavoriteModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from './recipe.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MaterialModulesModule } from '../material-modules/material-modules.module';
import {TokenInterceptor} from '../token.intercepter';
import {AuthGuard} from '../auth.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModulesModule
  ],
  providers: [
      RecipeService,
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
      AuthGuard
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModulesModule
  ]
})
export class SharedModule { }

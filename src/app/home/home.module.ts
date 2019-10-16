import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import {MaterialModulesModule} from '../material-modules/material-modules.module';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModulesModule,
    FormsModule
  ]
})
export class HomeModule { }

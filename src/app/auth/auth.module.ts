import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AuthService } from './auth.service';
import { MaterialModulesModule } from '../material-modules/material-modules.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModulesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
      AuthService
  ]
})
export class AuthModule { }

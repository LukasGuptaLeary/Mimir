import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import {MaterialModulesModule} from '../material-modules/material-modules.module';


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MaterialModulesModule,
    MatCarouselModule.forRoot()
  ]
})
export class WelcomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PersonRoutingModule} from './person-routing.module';
import {SharedModule} from '../shared/shared.module';
import {PersonComponent} from './pages/person/person.component';



@NgModule({
  declarations: [PersonComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    SharedModule
  ]
})
export class PersonModule { }

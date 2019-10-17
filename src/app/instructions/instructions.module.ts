import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructionsRoutingModule } from './instructions-routing.module';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { MaterialModulesModule } from '../material-modules/material-modules.module';


@NgModule({
  declarations: [InstructionsComponent],
  imports: [
    CommonModule,
    InstructionsRoutingModule,
    MaterialModulesModule
  ]
})
export class InstructionsModule { }
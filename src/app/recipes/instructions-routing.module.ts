import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructionsComponent } from './pages/instructions/instructions.component';


const routes: Routes = [
  { path: '', component: InstructionsComponent, children: [
      { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule ) },
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructionsRoutingModule { }
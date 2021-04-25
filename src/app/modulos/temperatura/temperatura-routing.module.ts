import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TomaTemperaturaHomeComponent } from './toma-temperatura-home/toma-temperatura-home.component';
import { TomaTemperaturaComponent } from './toma-temperatura/toma-temperatura.component';

const routes: Routes = [
  {
    path: '',
    component: TomaTemperaturaHomeComponent,
    children: [
      { path: '', component: TomaTemperaturaComponent },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemperaturaRoutingModule { }

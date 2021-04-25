import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemperaturaRoutingModule } from './temperatura-routing.module';
import { TomaTemperaturaHomeComponent } from './toma-temperatura-home/toma-temperatura-home.component';
import { TomaTemperaturaComponent } from './toma-temperatura/toma-temperatura.component';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations:
    [
      TomaTemperaturaHomeComponent,
      TomaTemperaturaComponent
    ],
  imports: [
    CommonModule,
    TemperaturaRoutingModule,
    SharedModule,
    PrimengModule
  ], exports: [
    TomaTemperaturaHomeComponent,
    TomaTemperaturaComponent
  ]
})
export class TemperaturaModule { }

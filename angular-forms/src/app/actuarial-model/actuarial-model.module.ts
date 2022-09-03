import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActuarialModelRoutingModule } from './actuarial-model-routing.module';
import { ActuarialModelComponent } from './actuarial-model.component';


@NgModule({
  declarations: [
    ActuarialModelComponent
  ],
  imports: [
    CommonModule,
    ActuarialModelRoutingModule
  ]
})
export class ActuarialModelModule { }

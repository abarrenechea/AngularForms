import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActuarialModelRoutingModule } from './actuarial-model-routing.module';
import { ActuarialModelComponent } from './actuarial-model.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ActuarialModelComponent
  ],
  imports: [
    CommonModule,
    ActuarialModelRoutingModule,
    SharedModule
  ],
})
export class ActuarialModelModule { }

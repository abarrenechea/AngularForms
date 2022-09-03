import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActuarialModelComponent } from './actuarial-model.component';

const routes: Routes = [{ path: '', component: ActuarialModelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActuarialModelRoutingModule { }

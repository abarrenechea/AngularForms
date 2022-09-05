import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'actuarial-model' },
  { path: 'actuarial-model', loadChildren: () => import('./actuarial-model/actuarial-model.module').then(m => m.ActuarialModelModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

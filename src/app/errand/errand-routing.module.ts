import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrandPage } from './errand.page';

const routes: Routes = [
  {
    path: '',
    component: ErrandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrandPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrandSignupPage } from './errand-signup.page';

const routes: Routes = [
  {
    path: '',
    component: ErrandSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrandSignupPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcommerceSignupPage } from './ecommerce-signup.page';

const routes: Routes = [
  {
    path: '',
    component: EcommerceSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcommerceSignupPageRoutingModule {}

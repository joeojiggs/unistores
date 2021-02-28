import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcommerceLoginPage } from './ecommerce-login.page';

const routes: Routes = [
  {
    path: '',
    component: EcommerceLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcommerceLoginPageRoutingModule {}

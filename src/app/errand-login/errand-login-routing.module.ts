import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrandLoginPage } from './errand-login.page';

const routes: Routes = [
  {
    path: '',
    component: ErrandLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrandLoginPageRoutingModule {}

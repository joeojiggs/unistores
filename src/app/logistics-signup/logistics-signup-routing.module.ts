import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogisticsSignupPage } from './logistics-signup.page';

const routes: Routes = [
  {
    path: '',
    component: LogisticsSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogisticsSignupPageRoutingModule {}

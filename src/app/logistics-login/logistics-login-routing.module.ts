import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogisticsLoginPage } from './logistics-login.page';

const routes: Routes = [
  {
    path: '',
    component: LogisticsLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogisticsLoginPageRoutingModule {}

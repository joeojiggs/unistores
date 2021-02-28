import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoCenterPage } from './info-center.page';

const routes: Routes = [
  {
    path: '',
    component: InfoCenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoCenterPageRoutingModule {}

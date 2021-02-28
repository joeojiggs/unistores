import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoCenterPageRoutingModule } from './info-center-routing.module';

import { InfoCenterPage } from './info-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoCenterPageRoutingModule
  ],
  declarations: [InfoCenterPage]
})
export class InfoCenterPageModule {}

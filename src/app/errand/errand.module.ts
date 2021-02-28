import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrandPageRoutingModule } from './errand-routing.module';

import { ErrandPage } from './errand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrandPageRoutingModule
  ],
  declarations: [ErrandPage]
})
export class ErrandPageModule {}

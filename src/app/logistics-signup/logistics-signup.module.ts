import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogisticsSignupPageRoutingModule } from './logistics-signup-routing.module';

import { LogisticsSignupPage } from './logistics-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogisticsSignupPageRoutingModule
  ],
  declarations: [LogisticsSignupPage]
})
export class LogisticsSignupPageModule {}

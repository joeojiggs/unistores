import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogisticsLoginPageRoutingModule } from './logistics-login-routing.module';

import { LogisticsLoginPage } from './logistics-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogisticsLoginPageRoutingModule
  ],
  declarations: [LogisticsLoginPage]
})
export class LogisticsLoginPageModule {}

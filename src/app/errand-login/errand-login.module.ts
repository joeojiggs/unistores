import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrandLoginPageRoutingModule } from './errand-login-routing.module';

import { ErrandLoginPage } from './errand-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrandLoginPageRoutingModule
  ],
  declarations: [ErrandLoginPage]
})
export class ErrandLoginPageModule {}

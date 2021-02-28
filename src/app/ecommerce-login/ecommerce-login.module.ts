import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcommerceLoginPageRoutingModule } from './ecommerce-login-routing.module';

import { EcommerceLoginPage } from './ecommerce-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcommerceLoginPageRoutingModule
  ],
  declarations: [EcommerceLoginPage]
})
export class EcommerceLoginPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcommerceSignupPageRoutingModule } from './ecommerce-signup-routing.module';

import { EcommerceSignupPage } from './ecommerce-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcommerceSignupPageRoutingModule
  ],
  declarations: [EcommerceSignupPage]
})
export class EcommerceSignupPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrandSignupPageRoutingModule } from './errand-signup-routing.module';

import { ErrandSignupPage } from './errand-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrandSignupPageRoutingModule
  ],
  declarations: [ErrandSignupPage]
})
export class ErrandSignupPageModule {}

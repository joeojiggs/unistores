import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SignupModalPage } from '../signup-modal/signup-modal.page';
import { LoginModalPage } from '../login-modal/login-modal.page';
const { Network, Toast } = Plugins;
@Component({
  selector: 'app-errand-signup',
  templateUrl: './errand-signup.page.html',
  styleUrls: ['./errand-signup.page.scss'],
})
export class ErrandSignupPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SignupModalPage } from '../signup-modal/signup-modal.page';
import { LoginModalPage } from '../login-modal/login-modal.page';
const { Network, Toast } = Plugins;
@Component({
  selector: 'app-logistics-signup',
  templateUrl: './logistics-signup.page.html',
  styleUrls: ['./logistics-signup.page.scss'],
})
export class LogisticsSignupPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

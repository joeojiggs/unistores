import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ModalController } from '@ionic/angular';
const { Network, Toast } = Plugins;
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.page.html',
  styleUrls: ['./login-modal.page.scss'],
})
export class LoginModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  showToast(msg){
    Toast.show({text:msg,duration: 'long'})
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async logisticsLogin(){
    let status = await Network.getStatus();

    if (status.connected === true ){
      window.location.assign("/logistics-loginup");
    }else{
      this.showToast("No Internet Connectivity");
    }
    
  }

  async errandLogin(){
    let status = await Network.getStatus();

    if (status.connected === true ){
      window.location.assign("/errand-signup");
    }else{
      this.showToast("No Internet Connectivity");
    }
  }

  async ecommerceLogin(){
    let status = await Network.getStatus();

    if (status.connected === true ){
      window.location.assign("/ecommerce-signup");
    }else{
      this.showToast("No Internet Connectivity");
    }
  }

  async userLogin(){
    let status = await Network.getStatus();

    if (status.connected === true ){
      window.location.assign("/user-signup");
    }else{
      this.showToast("No Internet Connectivity");
    }
  }

}

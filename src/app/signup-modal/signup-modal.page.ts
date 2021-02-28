import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ModalController } from '@ionic/angular';
const { Network, Toast } = Plugins;

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.page.html',
  styleUrls: ['./signup-modal.page.scss'],
})
export class SignupModalPage implements OnInit {

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

  async logisticsSignup(){
    window.location.assign("/logistics");

    let status = await Network.getStatus();

    if (status.connected === true ){
      window.location.assign("/logistics-signup");
    }else{
      this.showToast("No Internet Connectivity");
    }
    
  }

  async errandSignup(){
    let status = await Network.getStatus();

    if (status.connected === true ){
      window.location.assign("/errand-signup");
    }else{
      this.showToast("No Internet Connectivity");
    }
  }

  async ecommerceSignup(){
    let status = await Network.getStatus();

    if (status.connected === true ){
      window.location.assign("/ecommerce-signup");
    }else{
      this.showToast("No Internet Connectivity");
    }
  }

}

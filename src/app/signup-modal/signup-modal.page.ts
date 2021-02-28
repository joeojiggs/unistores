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
    let status = await Network.getStatus();

    if (status.connected === true ){
      window.location.assign("/logistics");
    }else{
      this.showToast("No Internet Connectivity");
    }
    
  }

  async errandSignuo(){
    let status = await Network.getStatus();

    if (status.connected === true ){
      window.location.assign("/errand");
    }else{
      this.showToast("No Internet Connectivity");
    }
  }

  async ecommerce(){
    let status = await Network.getStatus();

    if (status.connected === true ){
      window.location.assign("/ecommerce");
    }else{
      this.showToast("No Internet Connectivity");
    }
  }

}

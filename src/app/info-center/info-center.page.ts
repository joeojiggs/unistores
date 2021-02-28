import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SignupModalPage } from '../signup-modal/signup-modal.page';
import { LoginModalPage } from '../login-modal/login-modal.page';
const { Network, Toast } = Plugins;
@Component({
  selector: 'app-info-center',
  templateUrl: './info-center.page.html',
  styleUrls: ['./info-center.page.scss'],
})
export class InfoCenterPage implements OnInit {

  constructor(private menu: MenuController, public modalController: ModalController) { }

  ngOnInit() {
    let ref = this;
    Network.addListener("networkStatusChange",function 
    (val)
    {
      if (val.connected){
        ref.showToast("Internet Connected");

      }
      else{
        ref.showToast("Internet Disconnected");
        window.location.assign("/home");
      }
    });
  }
  showToast(msg){
    Toast.show({text:msg,duration: 'long'})
  }

  

}

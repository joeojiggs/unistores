import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Network, Toast } = Plugins;
@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.page.html',
  styleUrls: ['./logistics.page.scss'],
})
export class LogisticsPage implements OnInit {

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

  openMenu() {
    this.menu.enable(true, 'menu');
    this.menu.open('menu');
  }

  closeMenu() {
    this.menu.close('menu');
  }

  goHome() {
    window.location.assign("/home");
  }

  async signupModal() {
    const modal = await this.modalController.create({
      component: SignupModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async loginModal() {
    const modal = await this.modalController.create({
      component: LoginModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}


/*  constructor() { }

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
*/

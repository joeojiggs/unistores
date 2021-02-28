import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { MenuController } from '@ionic/angular';
const { Network, Toast } = Plugins;

@Component({
  selector: 'app-errand',
  templateUrl: './errand.page.html',
  styleUrls: ['./errand.page.scss'],
})
export class ErrandPage implements OnInit {

  constructor( private menu: MenuController) { }

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

}

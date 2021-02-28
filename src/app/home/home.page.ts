import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import 
const { Browser, Network, Toast } = Plugins;




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{

  constructor(private router: Router, private menu: MenuController) { }

  async ngOnInit(  ) {
    let status = await Network.getStatus();

    if (status.connected === true){
      this.showToast("Internet Connected");
    }else{
      this.showToast("No Internet Connectivity");
    }


  }

  showToast(msg){
    Toast.show({text:msg,duration: 'long'})
  }

  

  async logistics(){
    let status = await Network.getStatus();

    if (status.connected === true ){
      window.location.assign("/logistics");
    }else{
      this.showToast("No Internet Connectivity");
    }
    
  }

  async errand(){
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

  async info(){
    let status = await Network.getStatus();

    if (status.connected === true ){
      window.location.assign("/info-center");
    }else{
      this.showToast("No Internet Connectivity");
    }
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

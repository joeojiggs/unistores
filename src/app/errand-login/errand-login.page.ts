import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errand-login',
  templateUrl: './errand-login.page.html',
  styleUrls: ['./errand-login.page.scss'],
})
export class ErrandLoginPage implements OnInit {

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

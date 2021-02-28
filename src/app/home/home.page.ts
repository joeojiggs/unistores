import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
const { Browser, Network, Toast } = Plugins;




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{

  constructor(private router: Router) { }

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
      window.location.assign("/staff");
    }else{
      this.showToast("No Internet Connectivity");
    }
  }

  async admin(){
    let status = await Network.getStatus();

    if (status.connected === true ){
      window.location.assign("/admin");
    }else{
      this.showToast("No Internet Connectivity");
    }
  }

}

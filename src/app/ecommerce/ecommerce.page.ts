import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Network, Toast } = Plugins;

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.page.html',
  styleUrls: ['./ecommerce.page.scss'],
})
export class EcommercePage implements OnInit {

  constructor() { }

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
import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Network, Toast } = Plugins;
@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.page.html',
  styleUrls: ['./logistics.page.scss'],
})
export class LogisticsPage implements OnInit {

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

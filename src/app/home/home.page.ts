import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
const { Browser, Network, Toast } = Plugins;




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

}

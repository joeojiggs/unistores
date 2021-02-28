import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Network, Toast } = Plugins;

@Component({
  selector: 'app-errand',
  templateUrl: './errand.page.html',
  styleUrls: ['./errand.page.scss'],
})
export class ErrandPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

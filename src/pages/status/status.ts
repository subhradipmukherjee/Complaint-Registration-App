import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { userservice } from '../shared/shared';
import { comp_details } from '../shared/comp_details';

/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {

  x:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:userservice) {
  }

  ionViewDidLoad() {
    this.x = this.navParams.get('id');
    console.log('ionViewDidLoad StatusPage');
    console.log(this.x);
    this.service.getcomp(this.x);

  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Events} from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public event:Events) {
   this.event.publish('user:loggedout')
   this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

}

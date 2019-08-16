import { Component ,ViewChild } from '@angular/core';
import { Nav ,NavController, NavParams,ModalController } from 'ionic-angular';
import {Events} from 'ionic-angular';
import {UpdatePage } from '../update/update';
import {IssuePage} from '../issue/issue';
import { StatusPage } from '../status/status';
import { HomePage } from '../home/home';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {
  @ViewChild(Nav) nav: Nav;


  constructor(public mdctrl:ModalController,public navCtrl: NavController, public navParams: NavParams,public event:Events) {
    this.event.publish('user:loggedin');

  }
  nemp ={

    id:Number,
    name:String,
    contact:Number,
    username:String,
    password:String
  };
  /*x={

    id:Number,
    name:String,
    contact:Number,
    username:String,
    password:String
  };*/

  //a:any;

   static a_id:any;
   static a_name:any;
   static a_contact:any;
   static a_username:any;
   static a_password:any;

  y={

    id:Number,
    name:String,
    contact:Number,
    username:String,
    password:String
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');

    this.nemp.id = this.navParams.get('id');
    this.nemp.name = this.navParams.get('name');
    this.nemp.contact = this.navParams.get('contact');
    this.nemp.username = this.navParams.get('username');
    this.nemp.password = this.navParams.get('password');
    console.log(this.nemp);
    if(this.nemp.name != undefined)
    {

      OptionsPage.a_id = this.nemp.id;
      OptionsPage.a_name = this.nemp.name;
      OptionsPage.a_contact = this.nemp.contact;
      OptionsPage.a_username = this.nemp.username;
      OptionsPage.a_password = this.nemp.password;
    }
    this.y.id = OptionsPage.a_id;
    this.y.name = OptionsPage.a_name;
    this.y.contact = OptionsPage.a_contact;
    this.y.username = OptionsPage.a_username;
    this.y.password = OptionsPage.a_password;
    console.log(OptionsPage.a_name);
    console.log(this.y);
  }
  updatepage()
  {
    //this.mdctrl.create(UpdatePage).present();
    this.navCtrl.push(UpdatePage,this.y);
  }
  issuepage()
  {
    this.mdctrl.create(IssuePage,this.y).present();
  }
  statuspage()
  {
   this.navCtrl.push(StatusPage,this.y);
  }
  homepage()
  {
    this.navCtrl.setRoot(HomePage);
  }

}

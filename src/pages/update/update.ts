import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OptionsPage } from '../options/options';
import {detail} from '../shared/detail';
import {userservice} from '../shared/shared';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

 showAlert(message:string) {
    this.altr.create({
     title: 'Info!',
     subTitle: message,
     buttons: ['OK']
   }).present();
 }
 x={} as detail;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:userservice,public altr:AlertController) {
  }
  emp ={

    id:Number,
    name:String,
    contact:Number,
    username:String,
    password:String
  };

  ionViewDidLoad() {
    //console.log('ionViewDidLoad UpdatePage');
    this.emp.id = this.navParams.get('id');

    this.emp.name = this.navParams.get('name');
    this.emp.contact = this.navParams.get('contact');
    this.emp.username = this.navParams.get('username');
    this.emp.password = this.navParams.get('password');
    let a:any;
    a = this.emp.id;
    this.x.id = a;
    console.log(this.emp);
    console.log(this.x.id);
  }

  update()
  {
    console.log(this.x);
    this.service.putEmplyoee(this.x.id,this.x).subscribe(data=>{

      this.showAlert("Successfully Updated contact");
      this.navCtrl.setRoot(OptionsPage,this.x);
      //console.log(this.x);

    });

    //console.log(this.x);
  }


}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {detail} from '../shared/detail';
import {userservice} from '../shared/shared';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as detail;
  constructor(private service:userservice,public navCtrl: NavController, public navParams: NavParams,public altr:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  showAlert(message:string) {
    this.altr.create({
     title: 'Info!',
     subTitle: message,
     buttons: ['OK']
   }).present();
 }
  register(user:detail)
  {
    this.service.postEmployee(user).subscribe(data=>{


     user.id=null;
     user.contact=null;
     user.name="";
     user.password="";
     user.username="";

     if(data==null)
      {
       this.showAlert('Registration Failed');
      }
     else
      {
       this.showAlert('Registration successful');
      }
     });

  }

}

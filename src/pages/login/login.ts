import { Component } from '@angular/core';
import { NavController, NavParams ,ModalController } from 'ionic-angular';
import { Events} from 'ionic-angular';
import {userservice} from '../shared/shared';
import {RegisterPage} from '../register/register';
import {OptionsPage} from '../options/options';
import {detail} from '../shared/detail';
import { AlertController } from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-list',
  templateUrl: 'login.html',
  providers:[userservice]
})
export class LoginPage {

  user = {} as detail;

  emp:detail;
  constructor(public loadingCtrl: LoadingController,public modalcrtl:ModalController,public altr:AlertController, private service:userservice,public navCtrl: NavController, public navParams: NavParams,public event:Events) {

  }
  back()
  {
    this.navCtrl.pop();
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 500
    });
    loader.present();
  }
  showAlert(message:string) {
    this.altr.create({
     title: 'Info!',
     subTitle: message,
     buttons: ['OK']
   }).present();
 }
// this.event.publish('user:loggedin');
 login(user:detail)
 {

  this.service.login(this.user.username,this.user.password).subscribe(data=>{

    user.username = "";
    user.password = "";
    if(data == null)
    {
      this.showAlert('Login Failed');
    }
    else
    {
      this.event.publish('user:loggedin');

      this.emp = data;
      console.log(this.emp.id);
      //this.modalcrtl.create(OptionsPage).present();



      this.navCtrl.setRoot(OptionsPage,this.emp);
      this.presentLoading();

    }
  });


 }
 signup()
 {
  this.navCtrl.push(RegisterPage);
 }
}

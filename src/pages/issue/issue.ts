import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { userservice } from '../shared/shared';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { comp_details } from '../shared/comp_details';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the IssuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-issue',
  templateUrl: 'issue.html',
})
export class IssuePage {

  x:any;
  complaints={} as comp_details;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewctrl:ViewController,public service:userservice,public altr:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IssuePage');
    //this.service.getemployee("roop");
    this.x=this.navParams.get('id');
    this.complaints.empid = this.x;
    this.complaints.status="unattended";
    console.log(this.x);
  }
  showAlert(message:string) {
    this.altr.create({
     title: 'Info!',
     subTitle: message,
     buttons: ['OK']
   }).present();
 }
  close()
  {
   this.viewctrl.dismiss();
  }
  submit(complaints: comp_details)
  {
    this.service.postcomp(complaints).subscribe(data=>{
      if(data==null)
      {
       this.showAlert('Complaint registrartion Failed');
      }
     else
      {
       this.showAlert('Complain Registered successfully');
      }
    });
  }

}

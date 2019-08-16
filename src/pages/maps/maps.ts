import { Component,ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { ThrowStmt } from '@angular/compiler';
//declare var google;
//declare var google;
/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
//AIzaSyAWHUU-tzdWWJ95itUrDyxcFrieTsxMtpc api-key
export class MapsPage {
 // @ViewChild("map") mapElement;

  //loc: google.maps.Map;
 //loc:any;
 //loc:any;
  constructor(public navCtrl: NavController, public platform:Platform) {
   //this.loc=null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
    this.platform.ready().then(()=>{

    });
  }





}


import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LogoutPage } from '../pages/logout/logout';
import { GalleryPage } from '../pages/gallery/gallery';
import { OptionsPage } from '../pages/options/options';
import { MapsPage} from '../pages/maps/maps';
import { Events } from 'ionic-angular';
import {timer} from 'rxjs/observable/timer';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any,icon:string}>;

  showSplash = true;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public event:Events) {
    this.initializeApp();


    // used for an example of ngFor and navigation //<ion-icon name="home"></ion-icon>
    this.pages = [
      { title: 'Home', component: HomePage ,icon:"home"},
      { title: 'Login', component: LoginPage ,icon:"person"},
      { title: 'Signup', component: RegisterPage,icon:"person-add" },
      { title: 'Gallery', component: GalleryPage,icon:"images" },
      { title: 'location', component: MapsPage,icon:"pin"},
     // { title: 'DashBoard', component: OptionsPage, icon:"apps"},

    ];
    event.subscribe('user:loggedin',()=>{
      this.pages = [
        { title: 'Home', component: HomePage,icon:"home" },
        { title: 'LogOut', component: LogoutPage,icon:"log-out" },
        { title: 'DashBoard', component: OptionsPage, icon:"apps"},
        { title: 'Gallery', component: GalleryPage,icon:"images" },
        { title: 'location', component: MapsPage,icon:"pin"},

      ]
    });
    event.subscribe('user:loggedout',()=>{
      this.pages = [
        { title: 'Home', component: HomePage,icon:"home" },
        { title: 'Login', component: LoginPage,icon:"person" },
        { title: 'Signup', component: RegisterPage,icon:"person-add" },
        { title: 'Gallery', component: GalleryPage,icon:"images" },
        { title: 'location', component: MapsPage,icon:"pin"},


      ]
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(()=>this.showSplash = false)
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page == this.pages[1])
    {
      this.nav.push(page.component);
    }
    else{
      this.nav.setRoot(page.component);
    }

  }
}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {  Geolocation } from '@ionic-native/geolocation/ngx';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {IssuePage} from '../pages/issue/issue';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LogoutPage } from '../pages/logout/logout';
import { GalleryPage } from '../pages/gallery/gallery';
import { OptionsPage } from '../pages/options/options';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {userservice} from '../pages/shared/shared';
import {HttpModule} from '@angular/http';
import {UpdatePage} from '../pages/update/update';
import { StatusPage } from '../pages/status/status';
import { MapsPage} from '../pages/maps/maps';
import { IonicImageViewerModule } from 'ionic-img-viewer';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IssuePage,
    RegisterPage,
    LogoutPage,
    GalleryPage,
    OptionsPage,
    UpdatePage,
    LoginPage,
    StatusPage,
    MapsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      menuType:'push'
    }),
    HttpModule,
    IonicImageViewerModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IssuePage,
    RegisterPage,
    LogoutPage,
    GalleryPage,
    OptionsPage,
    UpdatePage,
    LoginPage,
    StatusPage,
    MapsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    userservice,
    Geolocation,

    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}

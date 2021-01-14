import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import { RouteReuseStrategy } from 'angular-route';
//import { IonicRouteStrategy } from '../app/reuse--strategy';

import { MyApp } from './app.component';
//import { InputComponent } from '../components/input/input';

import { HomePage } from '../pages/home/home';
//import { SignupPage } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { MenuPage } from '../pages/menu/menu';
import { ContactPage } from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { AppRoutingModule } from './app-routing.module';
//import { SignupPageRoutingModule } from '../pages/signup/signup-routing.module'
//import { HomePageRoutingModule } from '../pages/home/home-routing.module'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //SignupPage,
    AboutPage,
    MenuPage,
    ContactPage,
    //InputComponent,
    //AppRoutingModule
    //SignupPageRoutingModule,
    //HomePageRoutingModule
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //SignupPage,
    AboutPage,
    MenuPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  exports: [
    //InputComponent
  ]
})
export class AppModule {}

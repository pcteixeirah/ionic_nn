import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { QuicklinkModule } from 'ngx-quicklink'; // QuicklinkStrategy,
//import { RouterModule } from 'angular-route';
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
import { AppRoutingModule } from './app-routing.module';
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
    //SignupPageRoutingModule,
    //HomePageRoutingModule
  ],
  imports: [
    HttpClientModule,
    QuicklinkModule,
    IonicModule.forRoot(MyApp),
    //RouterModule.forRoot([AppRoutingModule], {
      //preloadingStrategy: QuicklinkStrategy

    //})
    //AppRoutingModule
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
    {provide: QuicklinkModule, useClass: AppRoutingModule}
  ],
  exports: [
    //InputComponent
  ]
})
export class AppModule {}

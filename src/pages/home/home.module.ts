import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { InputComponent } from '../../components/input/input';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    CommonModule,
    InputComponent,
    IonicPageModule.forChild(HomePage),
    HomePageRoutingModule
  ],
})
export class HomePageModule {}

/*
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { InputModule } from '../components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    LoginPageRoutingModule,
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}

*/
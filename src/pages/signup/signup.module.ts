import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { InputComponent } from '../../components/input/input';
import { SignupPageRoutingModule } from './signup-routing.module';


@NgModule({
  declarations: [
    SignupPage
  ],
  imports: [
    //CommonModule,
    //FormsModule,
    HttpClientModule,
    InputComponent,
    IonicPageModule.forChild(SignupPage),
    SignupPageRoutingModule
  ],
})
export class SignupPageModule {}

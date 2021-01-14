import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { InputComponent } from '../../components/input/input';
import { SignupPageRoutingModule } from './signup-routing.module';


@NgModule({
  declarations: [
    SignupPage
  ],
  imports: [
    CommonModule,
    InputComponent,
    IonicPageModule.forChild(SignupPage),
    SignupPageRoutingModule
  ],
})
export class SignupPageModule {}

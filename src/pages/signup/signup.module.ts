import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    InputComponent,
    IonicPageModule.forChild(SignupPage),
    SignupPageRoutingModule
  ],
})
export class SignupPageModule {}

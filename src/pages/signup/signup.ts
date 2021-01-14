import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Router } from 'angular-route';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {  //, private router: Router
  }
  /*
  navigate(){
    this.router.navigate(['/signup'])
  }
  */
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  
  ngOnInit() {
  }

}

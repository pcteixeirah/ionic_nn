import { Component, OnInit } from '@angular/core'; //ViewChild
import { IonicPage, NavController} from 'ionic-angular';  // 
//import { Router } from 'angular-route';

//import { InputComponent } from '../../components/input/input';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  //styleUrls: ['home.scss'],
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController) {}  //private router: Router, 
  /*
  navigate(){
    this.router.navigate(['/signup'])
  }
  */
  ngOnInit() {}

}

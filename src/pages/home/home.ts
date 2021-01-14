import { Component } from '@angular/core'; //ViewChild, OnInit 
import { IonicPage} from 'ionic-angular';  // , NavController
//import { Router } from 'angular-route';

//import { InputComponent } from '../../components/input/input';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  //styleUrls: ['home.scss'],
})
export class HomePage {  //implements OnInit 

  constructor() {}  //private router: Router, public navCtrl: NavController
  /*
  navigate(){
    this.router.navigate(['/signup'])
  }
  */
  //ngOnInit() {}

}

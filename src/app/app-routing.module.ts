import { NgModule } from '@angular/core';
import { RouterModule, Routes } from 'angular-route'; //PreloadAllModules, 
import { QuicklinkStrategy } from 'ngx-quicklink';  

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'signup',
    loadChildren: () => import('../pages/signup/signup.module').then( m => m.SignupPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy

    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from 'angular-route';

import { SignupPage } from './signup';

const routes: Routes = [
  {
    path: '',
    component: SignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupPageRoutingModule {}

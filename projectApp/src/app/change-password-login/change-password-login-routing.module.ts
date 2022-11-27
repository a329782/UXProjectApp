import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangePasswordLoginPage } from './change-password-login.page';

const routes: Routes = [
  {
    path: '',
    component: ChangePasswordLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangePasswordLoginPageRoutingModule {}

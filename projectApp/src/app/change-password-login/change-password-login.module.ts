import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangePasswordLoginPageRoutingModule } from './change-password-login-routing.module';

import { ChangePasswordLoginPage } from './change-password-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangePasswordLoginPageRoutingModule
  ],
  declarations: [ChangePasswordLoginPage]
})
export class ChangePasswordLoginPageModule {}

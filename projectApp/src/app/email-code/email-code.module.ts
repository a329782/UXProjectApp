import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailCodePageRoutingModule } from './email-code-routing.module';

import { EmailCodePage } from './email-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailCodePageRoutingModule
  ],
  declarations: [EmailCodePage]
})
export class EmailCodePageModule {}

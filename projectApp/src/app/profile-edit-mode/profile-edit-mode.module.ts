import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEditModePageRoutingModule } from './profile-edit-mode-routing.module';

import { ProfileEditModePage } from './profile-edit-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEditModePageRoutingModule
  ],
  declarations: [ProfileEditModePage]
})
export class ProfileEditModePageModule {}

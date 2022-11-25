import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEditModePageRoutingModule } from './profile-edit-mode-routing.module';

import { ProfileEditModePage } from './profile-edit-mode.page';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEditModePageRoutingModule,
    HomePageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [ProfileEditModePage]
})
export class ProfileEditModePageModule {}

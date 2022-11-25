import { SharedDirectivesModule } from './../directives/shared-directives.module';
import { HomePageRoutingModule } from './../home/home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    HomePageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}

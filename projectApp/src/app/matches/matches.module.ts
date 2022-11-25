import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchesPageRoutingModule } from './matches-routing.module';

import { MatchesPage } from './matches.page';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { SharedDirectivesModule } from '../directives/shared-directives.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchesPageRoutingModule,
    HomePageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [MatchesPage]
})
export class MatchesPageModule {}

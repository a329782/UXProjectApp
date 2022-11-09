import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamStatisticsPageRoutingModule } from './team-statistics-routing.module';

import { TeamStatisticsPage } from './team-statistics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamStatisticsPageRoutingModule
  ],
  declarations: [TeamStatisticsPage]
})
export class TeamStatisticsPageModule {}

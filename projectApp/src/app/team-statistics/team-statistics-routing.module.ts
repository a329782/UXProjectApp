import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamStatisticsPage } from './team-statistics.page';

const routes: Routes = [
  {
    path: '',
    component: TeamStatisticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamStatisticsPageRoutingModule {}

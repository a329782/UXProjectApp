import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'matches',
    loadChildren: () => import('./matches/matches.module').then( m => m.MatchesPageModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./statistics/statistics.module').then( m => m.StatisticsPageModule)
  },
  {
    path: 'profile-edit-mode',
    loadChildren: () => import('./profile-edit-mode/profile-edit-mode.module').then( m => m.ProfileEditModePageModule)
  },
  {
    path: 'team-statistics',
    loadChildren: () => import('./team-statistics/team-statistics.module').then( m => m.TeamStatisticsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
  },
  {
    path: 'ingame-arbitro',
    loadChildren: () => import('./ingame-arbitro/ingame-arbitro.module').then( m => m.IngameArbitroPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'change-password-login',
    loadChildren: () => import('./change-password-login/change-password-login.module').then( m => m.ChangePasswordLoginPageModule)
  },
  {
    path: 'email-code',
    loadChildren: () => import('./email-code/email-code.module').then( m => m.EmailCodePageModule)
  },
  {
    path: 'confirm-email',
    loadChildren: () => import('./confirm-email/confirm-email.module').then( m => m.ConfirmEmailPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

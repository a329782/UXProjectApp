import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileEditModePage } from './profile-edit-mode.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileEditModePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileEditModePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailCodePage } from './email-code.page';

const routes: Routes = [
  {
    path: '',
    component: EmailCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailCodePageRoutingModule {}

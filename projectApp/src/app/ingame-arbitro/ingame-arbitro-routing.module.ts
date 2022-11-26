import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngameArbitroPage } from './ingame-arbitro.page';

const routes: Routes = [
  {
    path: '',
    component: IngameArbitroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngameArbitroPageRoutingModule {}

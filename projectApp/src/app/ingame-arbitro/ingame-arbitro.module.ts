import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngameArbitroPageRoutingModule } from './ingame-arbitro-routing.module';

import { IngameArbitroPage } from './ingame-arbitro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngameArbitroPageRoutingModule
  ],
  declarations: [IngameArbitroPage]
})
export class IngameArbitroPageModule {}

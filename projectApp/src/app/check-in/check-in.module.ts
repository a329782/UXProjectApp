import { RouteReuseStrategy } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { CheckInPageRoutingModule } from './check-in-routing.module';

import { CheckInPage } from './check-in.page';

import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckInPageRoutingModule
  ],
  providers:[
    Geolocation,
  ],
  declarations: [CheckInPage]
})
export class CheckInPageModule {}

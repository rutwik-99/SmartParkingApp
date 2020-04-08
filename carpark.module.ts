import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarparkPageRoutingModule } from './carpark-routing.module';

import { CarparkPage } from './carpark.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarparkPageRoutingModule
  ],
  declarations: [CarparkPage]
})
export class CarparkPageModule {}

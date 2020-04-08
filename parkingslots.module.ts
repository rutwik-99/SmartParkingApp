import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingslotsPageRoutingModule } from './parkingslots-routing.module';

import { ParkingslotsPage } from './parkingslots.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingslotsPageRoutingModule
  ],
  declarations: [ParkingslotsPage]
})
export class ParkingslotsPageModule {}

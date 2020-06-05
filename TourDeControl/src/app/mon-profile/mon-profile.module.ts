import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonProfilePageRoutingModule } from './mon-profile-routing.module';

import { MonProfilePage } from './mon-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonProfilePageRoutingModule
  ],
  declarations: [MonProfilePage]
})
export class MonProfilePageModule {}

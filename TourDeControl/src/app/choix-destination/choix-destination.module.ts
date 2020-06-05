import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoixDestinationPageRoutingModule } from './choix-destination-routing.module';

import { ChoixDestinationPage } from './choix-destination.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//  import { Storage } from '@ionic/storage';
// import { LocalStorageProvider } from '../providers/local-storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoixDestinationPageRoutingModule,
    ReactiveFormsModule,
    //  Storage,
  ],
  declarations: [ChoixDestinationPage]
})
export class ChoixDestinationPageModule {}

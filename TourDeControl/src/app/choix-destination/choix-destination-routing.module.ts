import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoixDestinationPage } from './choix-destination.page';
import { Storage, IonicStorageModule } from '@ionic/storage';

const routes: Routes = [
  {
    path: '',
    component: ChoixDestinationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class ChoixDestinationPageRoutingModule {}

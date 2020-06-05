import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerUnComptePage } from './creer-un-compte.page';

const routes: Routes = [
  {
    path: '',
    component: CreerUnComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerUnComptePageRoutingModule {}

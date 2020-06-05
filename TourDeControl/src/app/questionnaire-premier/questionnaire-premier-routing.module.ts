import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionnairePremierPage } from './questionnaire-premier.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionnairePremierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionnairePremierPageRoutingModule {}

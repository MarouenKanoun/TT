import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoixQuestionnairePage } from './choix-questionnaire.page';

const routes: Routes = [
  {
    path: '',
    component: ChoixQuestionnairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoixQuestionnairePageRoutingModule {}

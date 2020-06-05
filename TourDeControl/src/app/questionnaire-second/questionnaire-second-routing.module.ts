import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionnaireSecondPage } from './questionnaire-second.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionnaireSecondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionnaireSecondPageRoutingModule {}

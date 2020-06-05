import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoixQuestionnairePageRoutingModule } from './choix-questionnaire-routing.module';

import { ChoixQuestionnairePage } from './choix-questionnaire.page';
import {ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoixQuestionnairePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ChoixQuestionnairePage]
})
export class ChoixQuestionnairePageModule {}

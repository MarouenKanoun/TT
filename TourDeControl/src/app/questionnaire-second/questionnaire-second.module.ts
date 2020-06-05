import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionnaireSecondPageRoutingModule } from './questionnaire-second-routing.module';

import { QuestionnaireSecondPage } from './questionnaire-second.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionnaireSecondPageRoutingModule
  ],
  declarations: [QuestionnaireSecondPage]
})
export class QuestionnaireSecondPageModule {}

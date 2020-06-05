import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionnairePremierPageRoutingModule } from './questionnaire-premier-routing.module';

import { QuestionnairePremierPage } from './questionnaire-premier.page';
import { ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionnairePremierPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [QuestionnairePremierPage]
})
export class QuestionnairePremierPageModule {}

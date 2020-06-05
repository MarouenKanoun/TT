import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuestionnaireSecondPage } from './questionnaire-second.page';

describe('QuestionnaireSecondPage', () => {
  let component: QuestionnaireSecondPage;
  let fixture: ComponentFixture<QuestionnaireSecondPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireSecondPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionnaireSecondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

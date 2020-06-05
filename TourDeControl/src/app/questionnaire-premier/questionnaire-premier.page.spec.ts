import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuestionnairePremierPage } from './questionnaire-premier.page';

describe('QuestionnairePremierPage', () => {
  let component: QuestionnairePremierPage;
  let fixture: ComponentFixture<QuestionnairePremierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnairePremierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionnairePremierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoixQuestionnairePage } from './choix-questionnaire.page';

describe('ChoixQuestionnairePage', () => {
  let component: ChoixQuestionnairePage;
  let fixture: ComponentFixture<ChoixQuestionnairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixQuestionnairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoixQuestionnairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreerUnComptePage } from './creer-un-compte.page';

describe('CreerUnComptePage', () => {
  let component: CreerUnComptePage;
  let fixture: ComponentFixture<CreerUnComptePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerUnComptePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreerUnComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

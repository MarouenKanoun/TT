import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoixDestinationPage } from './choix-destination.page';
import { Storage } from '@ionic/storage';


describe('ChoixDestinationPage', () => {
  let component: ChoixDestinationPage;
  let fixture: ComponentFixture<ChoixDestinationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixDestinationPage ],
      imports: [IonicModule.forRoot(),Storage]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoixDestinationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

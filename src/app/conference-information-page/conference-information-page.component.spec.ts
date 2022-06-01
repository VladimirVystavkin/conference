import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceInformationPageComponent } from './conference-information-page.component';

describe('ConferenceInformationPageComponent', () => {
  let component: ConferenceInformationPageComponent;
  let fixture: ComponentFixture<ConferenceInformationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceInformationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

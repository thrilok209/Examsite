import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionViewingPageComponent } from './question-viewing-page.component';

describe('QuestionViewingPageComponent', () => {
  let component: QuestionViewingPageComponent;
  let fixture: ComponentFixture<QuestionViewingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionViewingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionViewingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

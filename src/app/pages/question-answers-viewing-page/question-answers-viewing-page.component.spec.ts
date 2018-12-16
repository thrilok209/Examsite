import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswersViewingPageComponent } from './question-answers-viewing-page.component';

describe('QuestionAnswersViewingPageComponent', () => {
  let component: QuestionAnswersViewingPageComponent;
  let fixture: ComponentFixture<QuestionAnswersViewingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAnswersViewingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAnswersViewingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

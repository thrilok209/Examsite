import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreReviewingPageComponent } from './score-reviewing-page.component';

describe('ScoreReviewingPageComponent', () => {
  let component: ScoreReviewingPageComponent;
  let fixture: ComponentFixture<ScoreReviewingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreReviewingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreReviewingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

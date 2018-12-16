import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeQuestionsPageComponent } from './change-questions-page.component';

describe('ChangeQuestionsPageComponent', () => {
  let component: ChangeQuestionsPageComponent;
  let fixture: ComponentFixture<ChangeQuestionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeQuestionsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeQuestionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

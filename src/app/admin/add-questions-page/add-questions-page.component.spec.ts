import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionsPageComponent } from './add-questions-page.component';

describe('AddQuestionsPageComponent', () => {
  let component: AddQuestionsPageComponent;
  let fixture: ComponentFixture<AddQuestionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestionsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

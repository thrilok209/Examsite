import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSelectionPageComponent } from './test-selection-page.component';

describe('TestSelectionPageComponent', () => {
  let component: TestSelectionPageComponent;
  let fixture: ComponentFixture<TestSelectionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSelectionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

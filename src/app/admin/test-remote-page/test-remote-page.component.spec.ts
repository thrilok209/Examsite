import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRemotePageComponent } from './test-remote-page.component';

describe('TestRemotePageComponent', () => {
  let component: TestRemotePageComponent;
  let fixture: ComponentFixture<TestRemotePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRemotePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRemotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

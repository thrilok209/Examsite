import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsersToTestComponent } from './add-users-to-test.component';

describe('AddUsersToTestComponent', () => {
  let component: AddUsersToTestComponent;
  let fixture: ComponentFixture<AddUsersToTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUsersToTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsersToTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

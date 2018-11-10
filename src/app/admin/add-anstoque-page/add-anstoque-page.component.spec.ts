import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnstoquePageComponent } from './add-anstoque-page.component';

describe('AddAnstoquePageComponent', () => {
  let component: AddAnstoquePageComponent;
  let fixture: ComponentFixture<AddAnstoquePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnstoquePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnstoquePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

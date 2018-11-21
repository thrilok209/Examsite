import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueOptionsPageComponent } from './que-options-page.component';

describe('QueOptionsPageComponent', () => {
  let component: QueOptionsPageComponent;
  let fixture: ComponentFixture<QueOptionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueOptionsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueOptionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

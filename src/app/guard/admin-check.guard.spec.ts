import { TestBed, async, inject } from '@angular/core/testing';

import { AdminCheckGuard } from './admin-check.guard';

describe('AdminCheckGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminCheckGuard]
    });
  });

  it('should ...', inject([AdminCheckGuard], (guard: AdminCheckGuard) => {
    expect(guard).toBeTruthy();
  }));
});

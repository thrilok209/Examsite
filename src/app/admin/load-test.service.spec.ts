import { TestBed } from '@angular/core/testing';

import { LoadTestService } from './load-test.service';

describe('LoadTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadTestService = TestBed.get(LoadTestService);
    expect(service).toBeTruthy();
  });
});

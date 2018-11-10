import { TestBed } from '@angular/core/testing';

import { AddingQuestionService } from './adding-question.service';

describe('AddingQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddingQuestionService = TestBed.get(AddingQuestionService);
    expect(service).toBeTruthy();
  });
});

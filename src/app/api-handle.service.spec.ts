import { TestBed } from '@angular/core/testing';

import { ApiHandleService } from './api-handle.service';

describe('ApiHandleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiHandleService = TestBed.get(ApiHandleService);
    expect(service).toBeTruthy();
  });
});

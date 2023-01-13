import { TestBed } from '@angular/core/testing';

import { OpenTableService } from './open-table.service';

describe('OpenTableService', () => {
  let service: OpenTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

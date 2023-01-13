import { TestBed } from '@angular/core/testing';

import { FeatureTableService } from './feature-table.service';

describe('FeatureTableService', () => {
  let service: FeatureTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DatafactureService } from './datafacture.service';

describe('DatafactureService', () => {
  let service: DatafactureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatafactureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

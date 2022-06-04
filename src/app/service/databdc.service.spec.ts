import { TestBed } from '@angular/core/testing';

import { DatabdcService } from './databdc.service';

describe('DatabdcService', () => {
  let service: DatabdcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabdcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

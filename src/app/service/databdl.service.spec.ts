import { TestBed } from '@angular/core/testing';

import { DatabdlService } from './databdl.service';

describe('DatabdlService', () => {
  let service: DatabdlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabdlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

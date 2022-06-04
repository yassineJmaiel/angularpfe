import { TestBed } from '@angular/core/testing';

import { DatabdrService } from './databdr.service';

describe('DatabdrService', () => {
  let service: DatabdrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabdrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

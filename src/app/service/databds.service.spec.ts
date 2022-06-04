import { TestBed } from '@angular/core/testing';

import { DatabdsService } from './databds.service';

describe('DatabdsService', () => {
  let service: DatabdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

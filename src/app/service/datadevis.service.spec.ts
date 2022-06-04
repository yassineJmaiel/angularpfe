import { TestBed } from '@angular/core/testing';

import { DatadevisService } from './datadevis.service';

describe('DatadevisService', () => {
  let service: DatadevisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatadevisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

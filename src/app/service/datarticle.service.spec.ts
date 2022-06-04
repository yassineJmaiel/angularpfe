import { TestBed } from '@angular/core/testing';

import { DatarticleService } from './datarticle.service';

describe('DatarticleService', () => {
  let service: DatarticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatarticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

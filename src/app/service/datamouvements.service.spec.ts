import { TestBed } from '@angular/core/testing';

import { DatamouvementsService } from './datamouvements.service';

describe('DatamouvementsService', () => {
  let service: DatamouvementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatamouvementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

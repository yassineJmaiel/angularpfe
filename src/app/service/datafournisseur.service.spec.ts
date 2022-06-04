import { TestBed } from '@angular/core/testing';

import { DatafournisseurService } from './datafournisseur.service';

describe('DatafournisseurService', () => {
  let service: DatafournisseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatafournisseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

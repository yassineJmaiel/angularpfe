import { TestBed } from '@angular/core/testing';

import { FacturefournisseurService } from './facturefournisseur.service';

describe('FacturefournisseurService', () => {
  let service: FacturefournisseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturefournisseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

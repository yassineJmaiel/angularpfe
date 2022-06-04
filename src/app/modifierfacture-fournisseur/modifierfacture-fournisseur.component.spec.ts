import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierfactureFournisseurComponent } from './modifierfacture-fournisseur.component';

describe('ModifierfactureFournisseurComponent', () => {
  let component: ModifierfactureFournisseurComponent;
  let fixture: ComponentFixture<ModifierfactureFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierfactureFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierfactureFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

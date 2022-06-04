import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterfactureFournisseurComponent } from './ajouterfacture-fournisseur.component';

describe('AjouterfactureFournisseurComponent', () => {
  let component: AjouterfactureFournisseurComponent;
  let fixture: ComponentFixture<AjouterfactureFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterfactureFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterfactureFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefactureFournisseurComponent } from './listefacture-fournisseur.component';

describe('ListefactureFournisseurComponent', () => {
  let component: ListefactureFournisseurComponent;
  let fixture: ComponentFixture<ListefactureFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListefactureFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListefactureFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

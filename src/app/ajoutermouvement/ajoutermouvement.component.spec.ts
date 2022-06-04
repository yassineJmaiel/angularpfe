import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutermouvementComponent } from './ajoutermouvement.component';

describe('AjoutermouvementComponent', () => {
  let component: AjoutermouvementComponent;
  let fixture: ComponentFixture<AjoutermouvementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutermouvementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutermouvementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

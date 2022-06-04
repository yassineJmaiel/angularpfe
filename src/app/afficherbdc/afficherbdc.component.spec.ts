import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherbdcComponent } from './afficherbdc.component';

describe('AfficherbdcComponent', () => {
  let component: AfficherbdcComponent;
  let fixture: ComponentFixture<AfficherbdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherbdcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherbdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

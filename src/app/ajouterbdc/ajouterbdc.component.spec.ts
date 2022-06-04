import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterbdcComponent } from './ajouterbdc.component';

describe('AjouterbdcComponent', () => {
  let component: AjouterbdcComponent;
  let fixture: ComponentFixture<AjouterbdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterbdcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterbdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

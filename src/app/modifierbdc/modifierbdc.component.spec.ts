import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierbdcComponent } from './modifierbdc.component';

describe('ModifierbdcComponent', () => {
  let component: ModifierbdcComponent;
  let fixture: ComponentFixture<ModifierbdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierbdcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierbdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

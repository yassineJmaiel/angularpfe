import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermouvementComponent } from './modifiermouvement.component';

describe('ModifiermouvementComponent', () => {
  let component: ModifiermouvementComponent;
  let fixture: ComponentFixture<ModifiermouvementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiermouvementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiermouvementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

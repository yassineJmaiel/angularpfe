import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierbdrComponent } from './modifierbdr.component';

describe('ModifierbdrComponent', () => {
  let component: ModifierbdrComponent;
  let fixture: ComponentFixture<ModifierbdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierbdrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierbdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

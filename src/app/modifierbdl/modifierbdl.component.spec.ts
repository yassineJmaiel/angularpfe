import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierbdlComponent } from './modifierbdl.component';

describe('ModifierbdlComponent', () => {
  let component: ModifierbdlComponent;
  let fixture: ComponentFixture<ModifierbdlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierbdlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierbdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

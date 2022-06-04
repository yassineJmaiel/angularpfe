import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierbdsComponent } from './modifierbds.component';

describe('ModifierbdsComponent', () => {
  let component: ModifierbdsComponent;
  let fixture: ComponentFixture<ModifierbdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierbdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierbdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

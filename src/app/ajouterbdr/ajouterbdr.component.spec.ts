import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterbdrComponent } from './ajouterbdr.component';

describe('AjouterbdrComponent', () => {
  let component: AjouterbdrComponent;
  let fixture: ComponentFixture<AjouterbdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterbdrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterbdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

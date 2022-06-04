import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterbdlComponent } from './ajouterbdl.component';

describe('AjouterbdlComponent', () => {
  let component: AjouterbdlComponent;
  let fixture: ComponentFixture<AjouterbdlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterbdlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterbdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

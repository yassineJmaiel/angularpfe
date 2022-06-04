import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterbdsComponent } from './ajouterbds.component';

describe('AjouterbdsComponent', () => {
  let component: AjouterbdsComponent;
  let fixture: ComponentFixture<AjouterbdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterbdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterbdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

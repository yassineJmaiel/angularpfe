import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListebdcComponent } from './listebdc.component';

describe('ListebdcComponent', () => {
  let component: ListebdcComponent;
  let fixture: ComponentFixture<ListebdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListebdcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListebdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

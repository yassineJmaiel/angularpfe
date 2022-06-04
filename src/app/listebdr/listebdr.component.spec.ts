import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListebdrComponent } from './listebdr.component';

describe('ListebdrComponent', () => {
  let component: ListebdrComponent;
  let fixture: ComponentFixture<ListebdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListebdrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListebdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

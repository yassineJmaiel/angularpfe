import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListebdsComponent } from './listebds.component';

describe('ListebdsComponent', () => {
  let component: ListebdsComponent;
  let fixture: ComponentFixture<ListebdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListebdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListebdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

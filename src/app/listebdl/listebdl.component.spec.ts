import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListebdlComponent } from './listebdl.component';

describe('ListebdlComponent', () => {
  let component: ListebdlComponent;
  let fixture: ComponentFixture<ListebdlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListebdlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListebdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

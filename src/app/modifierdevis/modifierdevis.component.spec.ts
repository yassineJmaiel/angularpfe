import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierdevisComponent } from './modifierdevis.component';

describe('ModifierdevisComponent', () => {
  let component: ModifierdevisComponent;
  let fixture: ComponentFixture<ModifierdevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierdevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierdevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

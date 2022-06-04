import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierarticleComponent } from './modifierarticle.component';

describe('ModifierarticleComponent', () => {
  let component: ModifierarticleComponent;
  let fixture: ComponentFixture<ModifierarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierarticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

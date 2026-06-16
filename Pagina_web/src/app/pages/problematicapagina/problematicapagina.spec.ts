import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problematicapagina } from './problematicapagina';

describe('Problematicapagina', () => {
  let component: Problematicapagina;
  let fixture: ComponentFixture<Problematicapagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problematicapagina],
    }).compileComponents();

    fixture = TestBed.createComponent(Problematicapagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

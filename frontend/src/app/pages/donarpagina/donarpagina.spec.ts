import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Donarpagina } from './donarpagina';

describe('Donarpagina', () => {
  let component: Donarpagina;
  let fixture: ComponentFixture<Donarpagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Donarpagina],
    }).compileComponents();

    fixture = TestBed.createComponent(Donarpagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

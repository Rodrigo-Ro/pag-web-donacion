import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Camppagina } from './camppagina';

describe('Camppagina', () => {
  let component: Camppagina;
  let fixture: ComponentFixture<Camppagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Camppagina],
    }).compileComponents();

    fixture = TestBed.createComponent(Camppagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

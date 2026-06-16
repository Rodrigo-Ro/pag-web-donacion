import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iniciopagina } from './iniciopagina';

describe('Iniciopagina', () => {
  let component: Iniciopagina;
  let fixture: ComponentFixture<Iniciopagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iniciopagina],
    }).compileComponents();

    fixture = TestBed.createComponent(Iniciopagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactopagina } from './contactopagina';

describe('Contactopagina', () => {
  let component: Contactopagina;
  let fixture: ComponentFixture<Contactopagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactopagina],
    }).compileComponents();

    fixture = TestBed.createComponent(Contactopagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

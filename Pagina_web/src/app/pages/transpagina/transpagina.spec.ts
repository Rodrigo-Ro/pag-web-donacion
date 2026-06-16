import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transpagina } from './transpagina';

describe('Transpagina', () => {
  let component: Transpagina;
  let fixture: ComponentFixture<Transpagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transpagina],
    }).compileComponents();

    fixture = TestBed.createComponent(Transpagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

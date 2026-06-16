import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nosotrospagina } from './nosotrospagina';

describe('Nosotrospagina', () => {
  let component: Nosotrospagina;
  let fixture: ComponentFixture<Nosotrospagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nosotrospagina],
    }).compileComponents();

    fixture = TestBed.createComponent(Nosotrospagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

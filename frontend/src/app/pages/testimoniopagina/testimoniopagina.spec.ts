import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimoniopagina } from './testimoniopagina';

describe('Testimoniopagina', () => {
  let component: Testimoniopagina;
  let fixture: ComponentFixture<Testimoniopagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testimoniopagina],
    }).compileComponents();

    fixture = TestBed.createComponent(Testimoniopagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

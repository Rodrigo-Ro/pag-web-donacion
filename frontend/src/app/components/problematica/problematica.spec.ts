import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problematica } from './problematica';

describe('Problematica', () => {
  let component: Problematica;
  let fixture: ComponentFixture<Problematica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problematica],
    }).compileComponents();

    fixture = TestBed.createComponent(Problematica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

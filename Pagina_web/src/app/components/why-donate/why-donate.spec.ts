import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyDonate } from './why-donate';

describe('WhyDonate', () => {
  let component: WhyDonate;
  let fixture: ComponentFixture<WhyDonate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyDonate],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyDonate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

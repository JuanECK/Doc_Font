import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTarjeta } from './consulta-tarjeta';

describe('ConsultaTarjeta', () => {
  let component: ConsultaTarjeta;
  let fixture: ComponentFixture<ConsultaTarjeta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaTarjeta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaTarjeta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

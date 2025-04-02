import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica12Component } from './practica12.component';

describe('Practica12Component', () => {
  let component: Practica12Component;
  let fixture: ComponentFixture<Practica12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

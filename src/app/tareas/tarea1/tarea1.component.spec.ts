import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea1Component } from './tarea1.component';

describe('Tarea1Component', () => {
  let component: Tarea1Component;
  let fixture: ComponentFixture<Tarea1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarea1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarea1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

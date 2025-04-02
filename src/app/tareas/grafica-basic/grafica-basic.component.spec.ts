import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaBasicComponent } from './grafica-basic.component';

describe('GraficaBasicComponent', () => {
  let component: GraficaBasicComponent;
  let fixture: ComponentFixture<GraficaBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

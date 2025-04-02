import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaOptionsComponent } from './grafica-options.component';

describe('GraficaOptionsComponent', () => {
  let component: GraficaOptionsComponent;
  let fixture: ComponentFixture<GraficaOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

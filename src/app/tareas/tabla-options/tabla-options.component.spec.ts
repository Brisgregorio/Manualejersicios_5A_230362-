import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaOptionsComponent } from './tabla-options.component';

describe('TablaOptionsComponent', () => {
  let component: TablaOptionsComponent;
  let fixture: ComponentFixture<TablaOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

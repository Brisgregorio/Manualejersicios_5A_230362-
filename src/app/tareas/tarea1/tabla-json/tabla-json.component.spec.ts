import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaJsonComponent } from './tabla-json.component';

describe('TablaJsonComponent', () => {
  let component: TablaJsonComponent;
  let fixture: ComponentFixture<TablaJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

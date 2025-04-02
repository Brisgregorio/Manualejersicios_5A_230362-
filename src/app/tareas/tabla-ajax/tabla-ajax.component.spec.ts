import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAjaxComponent } from './tabla-ajax.component';

describe('TablaAjaxComponent', () => {
  let component: TablaAjaxComponent;
  let fixture: ComponentFixture<TablaAjaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaAjaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaAjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

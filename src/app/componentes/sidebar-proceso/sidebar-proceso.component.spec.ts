import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProcesoComponent } from './sidebar-proceso.component';

describe('SidebarProcesoComponent', () => {
  let component: SidebarProcesoComponent;
  let fixture: ComponentFixture<SidebarProcesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarProcesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

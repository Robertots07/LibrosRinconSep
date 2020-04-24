import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNumeraliaComponent } from './sidebar-numeralia.component';

describe('SidebarNumeraliaComponent', () => {
  let component: SidebarNumeraliaComponent;
  let fixture: ComponentFixture<SidebarNumeraliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarNumeraliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNumeraliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

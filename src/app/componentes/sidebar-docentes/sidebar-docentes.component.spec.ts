import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDocentesComponent } from './sidebar-docentes.component';

describe('SidebarDocentesComponent', () => {
  let component: SidebarDocentesComponent;
  let fixture: ComponentFixture<SidebarDocentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDocentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

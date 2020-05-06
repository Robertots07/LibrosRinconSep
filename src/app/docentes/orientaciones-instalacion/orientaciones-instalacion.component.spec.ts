import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientacionesInstalacionComponent } from './orientaciones-instalacion.component';

describe('OrientacionesInstalacionComponent', () => {
  let component: OrientacionesInstalacionComponent;
  let fixture: ComponentFixture<OrientacionesInstalacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrientacionesInstalacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientacionesInstalacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

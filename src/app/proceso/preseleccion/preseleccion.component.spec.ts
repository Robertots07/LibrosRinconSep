import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreseleccionComponent } from './preseleccion.component';

describe('PreseleccionComponent', () => {
  let component: PreseleccionComponent;
  let fixture: ComponentFixture<PreseleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreseleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreseleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

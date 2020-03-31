import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrecoleccionComponent } from './sobrecoleccion.component';

describe('SobrecoleccionComponent', () => {
  let component: SobrecoleccionComponent;
  let fixture: ComponentFixture<SobrecoleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobrecoleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobrecoleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

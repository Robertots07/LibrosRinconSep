import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplaresAdquiridosComponent } from './ejemplares-adquiridos.component';

describe('EjemplaresAdquiridosComponent', () => {
  let component: EjemplaresAdquiridosComponent;
  let fixture: ComponentFixture<EjemplaresAdquiridosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemplaresAdquiridosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemplaresAdquiridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

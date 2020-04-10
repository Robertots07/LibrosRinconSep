import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriasComponent } from './convocatorias.component';

describe('ConvocatoriasComponent', () => {
  let component: ConvocatoriasComponent;
  let fixture: ComponentFixture<ConvocatoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvocatoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

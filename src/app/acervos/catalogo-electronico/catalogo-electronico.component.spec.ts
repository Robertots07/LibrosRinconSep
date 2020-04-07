import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoElectronicoComponent } from './catalogo-electronico.component';

describe('CatalogoElectronicoComponent', () => {
  let component: CatalogoElectronicoComponent;
  let fixture: ComponentFixture<CatalogoElectronicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoElectronicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoElectronicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

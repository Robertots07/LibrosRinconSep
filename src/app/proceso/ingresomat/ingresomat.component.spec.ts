import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresomatComponent } from './ingresomat.component';

describe('IngresomatComponent', () => {
  let component: IngresomatComponent;
  let fixture: ComponentFixture<IngresomatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresomatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresomatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

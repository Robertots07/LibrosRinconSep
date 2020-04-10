import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrategiasLecturaComponent } from './estrategias-lectura.component';

describe('EstrategiasLecturaComponent', () => {
  let component: EstrategiasLecturaComponent;
  let fixture: ComponentFixture<EstrategiasLecturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrategiasLecturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrategiasLecturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

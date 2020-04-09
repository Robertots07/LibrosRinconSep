import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreprocesoComponent } from './sobreproceso.component';

describe('SobreprocesoComponent', () => {
  let component: SobreprocesoComponent;
  let fixture: ComponentFixture<SobreprocesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreprocesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreprocesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeraliaComponent } from './numeralia.component';

describe('NumeraliaComponent', () => {
  let component: NumeraliaComponent;
  let fixture: ComponentFixture<NumeraliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeraliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeraliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

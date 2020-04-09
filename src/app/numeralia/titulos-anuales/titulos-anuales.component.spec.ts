import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulosAnualesComponent } from './titulos-anuales.component';

describe('TitulosAnualesComponent', () => {
  let component: TitulosAnualesComponent;
  let fixture: ComponentFixture<TitulosAnualesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitulosAnualesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitulosAnualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

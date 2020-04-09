import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientacionComponent } from './orientacion.component';

describe('OrientacionComponent', () => {
  let component: OrientacionComponent;
  let fixture: ComponentFixture<OrientacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrientacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

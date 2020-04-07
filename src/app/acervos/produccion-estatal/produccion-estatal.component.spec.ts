import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionEstatalComponent } from './produccion-estatal.component';

describe('ProduccionEstatalComponent', () => {
  let component: ProduccionEstatalComponent;
  let fixture: ComponentFixture<ProduccionEstatalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduccionEstatalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduccionEstatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprocesoComponent } from './homeproceso.component';

describe('HomeprocesoComponent', () => {
  let component: HomeprocesoComponent;
  let fixture: ComponentFixture<HomeprocesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeprocesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeprocesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

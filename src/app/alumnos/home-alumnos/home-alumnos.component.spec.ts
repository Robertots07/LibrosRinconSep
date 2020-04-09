import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlumnosComponent } from './home-alumnos.component';

describe('HomeAlumnosComponent', () => {
  let component: HomeAlumnosComponent;
  let fixture: ComponentFixture<HomeAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

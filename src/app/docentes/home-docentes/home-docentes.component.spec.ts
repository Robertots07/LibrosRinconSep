import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDocentesComponent } from './home-docentes.component';

describe('HomeDocentesComponent', () => {
  let component: HomeDocentesComponent;
  let fixture: ComponentFixture<HomeDocentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDocentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

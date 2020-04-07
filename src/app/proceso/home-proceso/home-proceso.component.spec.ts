import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProcesoComponent } from './home-proceso.component';

describe('HomeProcesoComponent', () => {
  let component: HomeProcesoComponent;
  let fixture: ComponentFixture<HomeProcesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProcesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

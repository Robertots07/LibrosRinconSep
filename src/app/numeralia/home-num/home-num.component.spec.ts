import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNumComponent } from './home-num.component';

describe('HomeNumComponent', () => {
  let component: HomeNumComponent;
  let fixture: ComponentFixture<HomeNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

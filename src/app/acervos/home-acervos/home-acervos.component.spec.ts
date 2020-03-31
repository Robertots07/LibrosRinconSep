import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAcervosComponent } from './home-acervos.component';

describe('HomeAcervosComponent', () => {
  let component: HomeAcervosComponent;
  let fixture: ComponentFixture<HomeAcervosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAcervosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAcervosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootergobComponent } from './footergob.component';

describe('FootergobComponent', () => {
  let component: FootergobComponent;
  let fixture: ComponentFixture<FootergobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootergobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootergobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcervosComponent } from './acervos.component';

describe('AcervosComponent', () => {
  let component: AcervosComponent;
  let fixture: ComponentFixture<AcervosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcervosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcervosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

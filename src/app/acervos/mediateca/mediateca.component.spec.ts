import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediatecaComponent } from './mediateca.component';

describe('MediatecaComponent', () => {
  let component: MediatecaComponent;
  let fixture: ComponentFixture<MediatecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediatecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediatecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

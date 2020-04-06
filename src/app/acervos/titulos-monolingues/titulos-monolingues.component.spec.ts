import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulosMonolinguesComponent } from './titulos-monolingues.component';

describe('TitulosMonolinguesComponent', () => {
  let component: TitulosMonolinguesComponent;
  let fixture: ComponentFixture<TitulosMonolinguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitulosMonolinguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitulosMonolinguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

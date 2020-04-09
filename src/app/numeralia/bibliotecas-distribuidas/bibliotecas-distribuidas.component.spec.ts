import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecasDistribuidasComponent } from './bibliotecas-distribuidas.component';

describe('BibliotecasDistribuidasComponent', () => {
  let component: BibliotecasDistribuidasComponent;
  let fixture: ComponentFixture<BibliotecasDistribuidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliotecasDistribuidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecasDistribuidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

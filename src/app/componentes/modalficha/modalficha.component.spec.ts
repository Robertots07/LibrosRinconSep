import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalfichaComponent } from './modalficha.component';

describe('ModalfichaComponent', () => {
  let component: ModalfichaComponent;
  let fixture: ComponentFixture<ModalfichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalfichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalfichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

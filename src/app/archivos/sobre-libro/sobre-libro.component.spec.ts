import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreLibroComponent } from './sobre-libro.component';

describe('SobreLibroComponent', () => {
  let component: SobreLibroComponent;
  let fixture: ComponentFixture<SobreLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosSugeridosComponent } from './libros-sugeridos.component';

describe('LibrosSugeridosComponent', () => {
  let component: LibrosSugeridosComponent;
  let fixture: ComponentFixture<LibrosSugeridosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosSugeridosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosSugeridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

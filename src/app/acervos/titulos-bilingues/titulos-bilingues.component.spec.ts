import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulosBilinguesComponent } from './titulos-bilingues.component';

describe('TitulosBilinguesComponent', () => {
  let component: TitulosBilinguesComponent;
  let fixture: ComponentFixture<TitulosBilinguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitulosBilinguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitulosBilinguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

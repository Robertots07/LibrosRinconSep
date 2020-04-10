import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatHistoricoComponent } from './cat-historico.component';

describe('CatHistoricoComponent', () => {
  let component: CatHistoricoComponent;
  let fixture: ComponentFixture<CatHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

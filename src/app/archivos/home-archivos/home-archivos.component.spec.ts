import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArchivosComponent } from './home-archivos.component';

describe('HomeArchivosComponent', () => {
  let component: HomeArchivosComponent;
  let fixture: ComponentFixture<HomeArchivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeArchivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

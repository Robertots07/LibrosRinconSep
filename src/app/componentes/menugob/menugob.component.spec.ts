import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugobComponent } from './menugob.component';

describe('MenugobComponent', () => {
  let component: MenugobComponent;
  let fixture: ComponentFixture<MenugobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenugobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenugobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BamComponent } from './bam.component';

describe('BamComponent', () => {
  let component: BamComponent;
  let fixture: ComponentFixture<BamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

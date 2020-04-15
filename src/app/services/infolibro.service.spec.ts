import { TestBed } from '@angular/core/testing';

import { InfolibroService } from './infolibro.service';

describe('InfolibroService', () => {
  let service: InfolibroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfolibroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

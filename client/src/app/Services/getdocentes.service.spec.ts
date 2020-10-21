import { TestBed } from '@angular/core/testing';

import { GetdocentesService } from './getdocentes.service';

describe('GetdocentesService', () => {
  let service: GetdocentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdocentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { InsertarescuelaService } from './insertarescuela.service';

describe('InsertarescuelaService', () => {
  let service: InsertarescuelaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertarescuelaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

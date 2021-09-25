import { TestBed } from '@angular/core/testing';

import { DatatransserviceService } from './datatransservice.service';

describe('DatatransserviceService', () => {
  let service: DatatransserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatatransserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

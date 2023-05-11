import { TestBed } from '@angular/core/testing';

import { VideocrudserviceService } from './videocrudservice.service';

describe('VideocrudserviceService', () => {
  let service: VideocrudserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideocrudserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

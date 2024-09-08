import { TestBed } from '@angular/core/testing';

import { RegisterGstService } from './register-gst.service';

describe('RegisterGstService', () => {
  let service: RegisterGstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterGstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

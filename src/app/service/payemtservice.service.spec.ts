import { TestBed } from '@angular/core/testing';

import { PayemtserviceService } from './payemtservice.service';

describe('PayemtserviceService', () => {
  let service: PayemtserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayemtserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

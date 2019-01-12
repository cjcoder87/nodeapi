import { TestBed, inject } from '@angular/core/testing';

import { TestserviceService } from './testservice.service';

describe('TestserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestserviceService]
    });
  });

  it('should be created', inject([TestserviceService], (service: TestserviceService) => {
    expect(service).toBeTruthy();
  }));
});

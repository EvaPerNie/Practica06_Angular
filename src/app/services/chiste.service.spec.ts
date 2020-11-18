import { TestBed } from '@angular/core/testing';

import { ChisteService } from './chiste.service';

describe('ChisteService', () => {
  let service: ChisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

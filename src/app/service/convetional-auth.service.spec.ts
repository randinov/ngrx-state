import { TestBed } from '@angular/core/testing';

import { ConvetionalAuthService } from './convetional-auth.service';

describe('ConvetionalAuthService', () => {
  let service: ConvetionalAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvetionalAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

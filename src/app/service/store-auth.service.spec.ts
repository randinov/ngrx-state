import { TestBed } from '@angular/core/testing';

import { StoreAuthService } from './store-auth.service';

describe('StoreAuthService', () => {
  let service: StoreAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

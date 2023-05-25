import { TestBed } from '@angular/core/testing';

import { OwnerUserService } from './owner-user.service';

describe('OwnerUserService', () => {
  let service: OwnerUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TenantPropertyService } from './tenant-property.service';

describe('TenantPropertyService', () => {
  let service: TenantPropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenantPropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TenantDocumentService } from './tenant-document.service';

describe('TenantDocumentService', () => {
  let service: TenantDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenantDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { OwnerDocumentService } from './owner-document.service';

describe('OwnerDocumentService', () => {
  let service: OwnerDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

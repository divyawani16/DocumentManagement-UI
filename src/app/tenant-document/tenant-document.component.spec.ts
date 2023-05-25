import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantDocumentComponent } from './tenant-document.component';

describe('TenantDocumentComponent', () => {
  let component: TenantDocumentComponent;
  let fixture: ComponentFixture<TenantDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

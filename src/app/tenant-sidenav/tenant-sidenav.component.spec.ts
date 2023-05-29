import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantSidenavComponent } from './tenant-sidenav.component';

describe('TenantSidenavComponent', () => {
  let component: TenantSidenavComponent;
  let fixture: ComponentFixture<TenantSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

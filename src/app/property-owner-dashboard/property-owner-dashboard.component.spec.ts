import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyOwnerDashboardComponent } from './property-owner-dashboard.component';

describe('PropertyOwnerDashboardComponent', () => {
  let component: PropertyOwnerDashboardComponent;
  let fixture: ComponentFixture<PropertyOwnerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyOwnerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyOwnerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

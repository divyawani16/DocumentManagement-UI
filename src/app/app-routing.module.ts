import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PropertyComponent } from './property/property.component';
import { UsersComponent } from './users/users.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { HistoryComponent } from './history/history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TenantDashboardComponent } from './tenant-dashboard/tenant-dashboard.component';
import { PropertyOwnerDashboardComponent } from './property-owner-dashboard/property-owner-dashboard.component';
import { TenantDocumentComponent } from './tenant-document/tenant-document.component';
import { OwnerDocumentComponent } from './owner-document/owner-document.component';
import { OwnerPropertyComponent } from './owner-property/owner-property.component';
import { OwnerUserComponent } from './owner-user/owner-user.component';
import { TenantPropertyComponent } from './tenant-property/tenant-property.component';

const routes: Routes = [
 { path: 'login', component: LoginComponent, pathMatch: 'full', data: { layout: 'login-layout' } },
 { path: 'dashboard', component: DashboardComponent, data: { layout: 'default' } },
  { path: 'home', component: HomeComponent, data: { layout: 'default' } },
  { path: 'users', component: UsersComponent, data: { layout: 'default' } },
  { path: 'property', component: PropertyComponent, data: { layout: 'default' } },
  { path: 'document-details', component: DocumentDetailsComponent, data: { layout: 'default' } },
  { path: 'history', component: HistoryComponent, data: { layout: 'default' } },
  { path:'tenant',component: TenantDashboardComponent,data: { layout: 'default' } },
  { path: 'your-document',component: TenantDocumentComponent,data: { layout: 'default' }  },
  { path: 'your-property',component: TenantPropertyComponent,data: { layout: 'default' }  },
  { path: 'owner', component: PropertyOwnerDashboardComponent,data: { layout: 'default' } },
  { path: 'owner-document',component: OwnerDocumentComponent, data: { layout: 'default' }  },
  { path: 'owner-property',component: OwnerPropertyComponent,data: { layout: 'default' }  },
  { path: 'owner-user',component: OwnerUserComponent,data: { layout: 'default' }  },
 

  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

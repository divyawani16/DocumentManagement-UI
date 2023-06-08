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
import { ForbiddenComponent } from './forbidden/forbidden.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
 { path: 'login', component: LoginComponent, pathMatch: 'full', data: { layout: 'login-layout' } },
 { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard], data:{userRoles:['Admin']} },
  { path: 'home', component: HomeComponent ,canActivate:[AuthGuard], data:{userRoles:['Admin']}},
  { path: 'users', component: UsersComponent, canActivate:[AuthGuard], data:{userRoles:['Admin']}},
  { path: 'property', component: PropertyComponent, canActivate:[AuthGuard], data:{userRoles:['Admin']}},
  { path: 'document-details', component: DocumentDetailsComponent, data: { layout: 'default' } },
  { path: 'history', component: HistoryComponent, data: { layout: 'default' } },
  { path:'tenant',component: TenantDashboardComponent,canActivate:[AuthGuard], data:{userRoles:['tenant']}}  ,
  { path: 'your-document',component: TenantDocumentComponent,canActivate:[AuthGuard], data:{userRoles:['tenant']}  },
  { path: 'your-property',component: TenantPropertyComponent,canActivate:[AuthGuard], data:{userRoles:['tenant']}  },
  { path: 'owner', component: PropertyOwnerDashboardComponent,canActivate:[AuthGuard], data:{userRoles:['owner']} },
  { path: 'owner-document',component: OwnerDocumentComponent, canActivate:[AuthGuard], data:{userRoles:['owner']}  },
  { path: 'owner-property',component: OwnerPropertyComponent,canActivate:[AuthGuard], data:{userRoles:['owner']} },
  { path: 'owner-user',component: OwnerUserComponent,canActivate:[AuthGuard], data:{userRoles:['owner']}  },
  { path: 'forbidden', component:ForbiddenComponent},
 
{ path :'landing-page', component:LandingPageComponent,pathMatch: 'full', data: { layout: 'login-layout' }},
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import {MatInputModule} from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { PropertyComponent } from './property/property.component';
import { TableComponent } from './table/table.component';
import { UsersComponent } from './users/users.component';
import { ButtonComponent } from './button/button.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { HistoryComponent } from './history/history.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteComponent } from './delete/delete.component'
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSelectModule } from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { AddUserComponent } from './add-user/add-user.component'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PropertyOwnerDashboardComponent } from './property-owner-dashboard/property-owner-dashboard.component';
import { TenantDashboardComponent } from './tenant-dashboard/tenant-dashboard.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { OwnerPropertyComponent } from './owner-property/owner-property.component';
import { OwnerDocumentComponent } from './owner-document/owner-document.component';
import { OwnerUserComponent } from './owner-user/owner-user.component';
import { TenantDocumentComponent } from './tenant-document/tenant-document.component';
import { TenantPropertyComponent } from './tenant-property/tenant-property.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { OwnerSidenavComponent } from './owner-sidenav/owner-sidenav.component';
import { TenantSidenavComponent } from './tenant-sidenav/tenant-sidenav.component';
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    LoginComponent,
    LoginLayoutComponent,
    PropertyComponent,
    TableComponent,
    UsersComponent,
    ButtonComponent,
    DocumentDetailsComponent,
    HistoryComponent,
    AddDocumentComponent,
    DeleteComponent,
    DashboardComponent,
    AddpropertyComponent,
    AddUserComponent,
    PropertyOwnerDashboardComponent,
    TenantDashboardComponent,

    OwnerPropertyComponent,
    OwnerDocumentComponent,
    OwnerUserComponent,
    TenantDocumentComponent,
    TenantPropertyComponent,
    OwnerSidenavComponent,
    TenantSidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatRadioModule,
    MatGridListModule,
    MatSnackBarModule,
    HttpClientModule,
    MatSelectModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    SocialLoginModule,


  ],
  providers: [
  //   SocialAuthService,{
  //  provide: 'SocialAuthServiceConfig',
  // useValue: {
  //     autoLogin: false,
  //    providers: [
  //    {
  //     id: GoogleLoginProvider.PROVIDER_ID,
  //      provider: new GoogleLoginProvider(
  //      '248604648421-gu3ja2c5e8po1uapmfqo1p2t54tskpkt.apps.googleusercontent.com'
  //     )
  //      },
  //      ],
  //     } as SocialAuthServiceConfig,
  //     }],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

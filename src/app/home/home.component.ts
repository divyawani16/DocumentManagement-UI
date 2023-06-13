import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentComponent } from '../add-document/add-document.component';
import { HomeService } from './home.service';
import { Document } from './home.model';
import { EditDocumentComponent } from '../edit-document/edit-document.component';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchValue: string = '';
  documentsList: Document[] | undefined;

  status:boolean;
  @Output() documentStatusUpdated: EventEmitter<Document> = new EventEmitter<Document>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  snackBar: any;

  constructor(
    private dialog: MatDialog,
    private homeService: HomeService
  ) {}


  ngOnInit() {
    try {
      this.getDocuments(); 

    } catch (err) {
      console.log(err);
    }
  }

  getDocuments(): void {
    this.homeService.getDocuments().subscribe(
      documents => {
        this.documentsList = documents;
        console.log('Documents:', this.documentsList);
        console.log('Document Ids:', this.documentsList.map(document => document.documentId));
      },
      error => {
        console.error('Error fetching documents:', error);
      }
    );
  }

  editDocument(document: Document): void {
    const dialogRef = this.dialog.open(EditDocumentComponent, {
      width: '450px',
      height: '500px',
      data: document,
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.homeService.updateDocument(result.documentId, result).subscribe(
          updatedDocument => {
            console.log('Document updated successfully:', updatedDocument);
            this.getDocuments();
            this.snackBar.open('Document updated successfully', 'Dismiss', {
              duration: 3000
            });
          },
          error => {
            console.error('Error updating document:', error);
            this.snackBar.open('Error updating document', 'Dismiss', {
              duration: 3000
            });
          }
        );
      }
    });
  }
  

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDocumentComponent, {
      width: '450px',
      height: '500px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  headArray = [
    { 'Head': 'Document Name', 'FieldName': 'documentName' },
    { 'Head': 'User Name ', 'FieldName': 'userName' },
    { 'Head': 'Property Name', 'FieldName': 'propertyName' },
    { 'Head': 'Document Type', 'FieldName': 'docTypeName' },
    { 'Head': 'DateTime', 'FieldName': 'dateTime' },
    { 'Head': 'Action', 'FieldName': 'action' },
    { 'Head': 'View', 'FieldName': 'download' },
    { 'Head': 'Status', 'FieldName': 'status', 'FieldType': 'toggle' }

  ];

  filterData() {
    console.log('Search value:', this.searchValue);
    if (!this.searchValue) {
      return this.documentsList;
    }
    const filteredList = this.documentsList.filter(document => {
      return document.documentName.toLowerCase().includes(this.searchValue.toLowerCase());
    });
    console.log('Filtered list:', filteredList);
    return filteredList;
  }

  search() {
    console.log('Search value:', this.searchValue);
    this.filterData();
  }


  deleteDocument(item: any) {
    const index = this.documentsList.indexOf(item);
    if (index > -1) {
      this.documentsList.splice(index, 1);
    }
    this.homeService.deleteDocument(item.documentId).subscribe(
      () => {
        console.log('Record deleted successfully from the database');
      },
      (error) => {
        console.error('Error deleting record from the database:', error);
      }
    );
  }


  public download(documentId: any) {
    console.log('Download method called with documentId:', documentId);
  
    this.homeService.download(documentId).subscribe((response: HttpResponse<Blob>) => {
      const contentDispositionHeader = response.headers.get('content-disposition');
      const fileNameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      const matches = fileNameRegex.exec(contentDispositionHeader || '');
      const fileName = matches != null && matches[1] ? matches[1].replace(/['"]/g, '') : 'file';
      const blob = new Blob([response.body], { type: response.body.type });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(link.href);
    });
  }

  
  
  
  // public download(documentId: any) {
  //   console.log('Download method called with documentId:', documentId);
  //   const headers = new HttpHeaders({
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Credentials': 'true'
  //   });
  
  //   this.homeService.download(documentId)
  //     .subscribe((response: HttpResponse<Blob>) => {
  //       const contentDispositionHeader = response.headers.get('content-disposition');
  //       const fileName = contentDispositionHeader?.split(';')[1].split('=')[1];
  //       const url = window.URL.createObjectURL(response.body);
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = fileName ?? 'file';
  //       link.click();
  //       window.URL.revokeObjectURL(url);
  //     });
  // }
  


  isClicked = false;

  onSearchBoxClick() {
    this.isClicked = true;
  }
}

 

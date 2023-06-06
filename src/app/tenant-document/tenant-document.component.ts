import { Component, OnInit } from '@angular/core';
import { Document } from './tenant-document.model';
import { TenantDocumentService } from './tenant-document.service';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentComponent } from '../add-document/add-document.component';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-tenant-document',
  templateUrl: './tenant-document.component.html',
  styleUrls: ['./tenant-document.component.scss']
})

export class TenantDocumentComponent implements OnInit {
  searchValue: string = '';

  documentsList: Document[] | undefined;

  constructor(
    private TenantDocumentService : TenantDocumentService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    try{
      this.TenantDocumentService.getDocuments()
      .subscribe(documents => this.documentsList = documents);
      console.log(this.documentsList)
    }catch(err){
      console.log(err)
    }
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
    { 'Head': 'Document Mime Type', 'FieldName': 'docMimeTypeName' },
    {'Head': 'Action', 'FieldName': 'action' } ,
    { 'Head': 'View', 'FieldName': 'download' },
  ];

  editDocument(document: Document) {
  }

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
  public download(documentId: any) {
    console.log('Download method called with documentId:', documentId);
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    });
  
    this.TenantDocumentService.download(documentId)
      .subscribe((response: HttpResponse<Blob>) => {
        const contentDispositionHeader = response.headers.get('content-disposition');
        const fileName = contentDispositionHeader?.split(';')[1].split('=')[1];
        const url = window.URL.createObjectURL(response.body);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName ?? 'file';
        link.click();
        window.URL.revokeObjectURL(url);
      });
  }
  

  deleteDocument(item: any) {
    const index = this.documentsList.indexOf(item);
    if (index > -1) {
      this.documentsList.splice(index, 1);
    }
  
    this.TenantDocumentService.deleteDocument(item.documentId).subscribe(
      () => {
        console.log('Record deleted successfully from the database');
      },
      (error) => {
        console.error('Error deleting record from the database:', error);
      }
    );
  }
  
}

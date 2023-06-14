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

  
  isClicked = false;
  
  userid:number=Number(localStorage.getItem("userid"));
  mydocuments:any;

  onSearchBoxClick() {

    this.isClicked = true;
  }

  // toggleDropdown() {
  //   this.dropdownOpen = !this.dropdownOpen;
  // }

  selectUsername(username: string) {
    // Handle username selection
  }
  ngOnInit(): void {
    this.TenantDocumentService.getDocuments(this.userid).subscribe(documents => {
      this.documentsList = documents;
      console.log(this.documentsList);
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
   // { 'Head': 'Document Mime Type', 'FieldName': 'docMimeTypeName' },
   // {'Head': 'Action', 'FieldName': 'action' } ,
    { 'Head': 'DateTime', 'FieldName': 'dateTime' },
    { 'Head': 'View', 'FieldName': 'download' },
    {'Head': 'Status', 'FieldName': 'status', 'FieldType': 'toggle' },
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

  public download(event:any) {
    const selectedDocumentId=event.documentId;
    const documentResponse= this.documentsList;
    const documentTodownload=documentResponse.filter((document)=>document.documentId===selectedDocumentId);
    console.log(documentTodownload);
    //const documentToDownload=documentResponse.((document)=>document.documentId==documentId);
    this.TenantDocumentService.download(selectedDocumentId).subscribe((response: HttpResponse<Blob>) => {
      const contentDispositionHeader = response.headers.get('content-disposition');
      const fileNameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      const matches = fileNameRegex.exec(contentDispositionHeader || '');
      const fileName = event.documentName;
      const fileExtension= event.filePath.split('.')[1];
      const blob = new Blob([response.body], { type: response.body.type });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName+"."+fileExtension;
      link.click();
      URL.revokeObjectURL(link.href);
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
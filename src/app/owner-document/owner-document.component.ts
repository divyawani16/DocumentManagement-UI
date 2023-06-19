import { Component, OnInit } from '@angular/core';
import { OwnerDocumentService } from './owner-document.service';
import { Document } from './owner-document.model';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentComponent } from '../add-document/add-document.component';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-owner-document',
  templateUrl: './owner-document.component.html',
  styleUrls: ['./owner-document.component.scss']
})
export class OwnerDocumentComponent implements OnInit {
  documentsList: Document[] | undefined;
  searchValue: any;
  Propertylist: any;


  isClicked = false;

  onSearchBoxClick() {

    this.isClicked = true;
  }
  
  constructor(
    private OwnerDocumentService : OwnerDocumentService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    try {
      const propertyName = 'Smartworks'; 
      this.OwnerDocumentService.getSmartworksDocuments(propertyName)
        .subscribe(documents => this.documentsList = documents);
      console.log(this.documentsList);
    } catch (err) {
      console.log(err);
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
    { 'Head': 'DateTime', 'FieldName': 'dateTime' },
    {'Head': 'Action', 'FieldName': 'action' } ,
    { 'Head': 'View', 'FieldName': 'download' },
    {'Head': 'Status', 'FieldName': 'status', 'FieldType': 'toggle' },
  ];
  deleteDocument(item: any) {
    const index = this.documentsList.indexOf(item);
    if (index > -1) {
      this.documentsList.splice(index, 1);
    }
  
    const documentId = parseInt(item.documentId); // Parse as an integer
  
    this.OwnerDocumentService.deleteDocument(documentId).subscribe(
      () => {
        console.log('Record deleted successfully from the database');
      },
      (error) => {
        console.error('Error deleting record from the database:', error);
      }
    );
  }
  
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
    this.OwnerDocumentService.download(selectedDocumentId).subscribe((response: HttpResponse<Blob>) => {
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
  
 
}


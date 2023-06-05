import { Component, OnInit } from '@angular/core';
import { OwnerDocumentService } from './owner-document.service';
import { Document } from './owner-document.model';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentComponent } from '../add-document/add-document.component';
@Component({
  selector: 'app-owner-document',
  templateUrl: './owner-document.component.html',
  styleUrls: ['./owner-document.component.scss']
})
export class OwnerDocumentComponent implements OnInit {
  documentsList: Document[] | undefined;
  searchValue: any;
  Propertylist: any;
  constructor(
    private OwnerDocumentService : OwnerDocumentService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    try{
      
      this.OwnerDocumentService.getDocuments()
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
    {'Head': 'Status', 'FieldName': 'status', 'FieldType': 'toggle' },
  ];


  editDocument(document: Document) {
  
  }

  filterData() {
    console.log('Search value:', this.searchValue);
    if (!this.searchValue) {
      return this.Propertylist;
    }
  //   const filteredList = this.Propertylist.filter(document => {
  //     return document.documentName.toLowerCase().includes(this.searchValue.toLowerCase());
  //   });
  //   console.log('Filtered list:', filteredList);
  //   return filteredList;
  // }
 
}
}

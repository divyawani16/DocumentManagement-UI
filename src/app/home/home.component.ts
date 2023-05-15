import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentComponent } from '../add-document/add-document.component';
import { HomeService } from './home.service';
import { Document } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchValue: string = '';
  documentsList: Document[] = [];

  constructor(
    private dialog: MatDialog,
    private homeService: HomeService
  ) {}

  ngOnInit() {
    try{
      this.homeService.getDocuments()
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
      data: {}
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
    { 'Head': 'Document Type Name', 'FieldName': 'docTypeName' }, 
    { 'Head': 'Document Mime Type Name', 'FieldName': 'docMimeTypeName' }, 
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

  editDocument(document: Document) {
    // implement edit functionality
  }

  deleteDocument(document: Document) {
    // implement delete functionality
  }

  isSearchBoxClicked = false;

  onSearchBoxClick() {
    this.isSearchBoxClicked = true;
  }

  
}


// import { DataSource } from '@angular/cdk/table';
// import { Component, OnInit } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
// import { Observable, ReplaySubject } from 'rxjs';
// import { Column } from '../table/column';
// import { MatDialog } from '@angular/material/dialog';
// import { AddDocumentComponent } from '../add-document/add-document.component';
// import { HomeService } from './home.service';
// import { Document } from './home.model';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {

 
//   documentslist: Document[] | undefined;

//   constructor(private homeService: HomeService) { }

//   ngOnInit() {
//     try{
//       this.homeService.getDocuments()
//       .subscribe(documents => this.documentslist = documents);
//     }catch(err){
//       console.log(err)
//     }
    
    
//   }
  
  
// }

  

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentComponent } from '../add-document/add-document.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeService } from './home.service';
import { Document } from './home.model';
import { AddpropertyComponent } from '../addproperty/addproperty.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchValue: string = '';

  documentsList: Document[] = [];
  tableName: string;

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


//   constructor(public dialog: MatDialog) {}

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
    { 'Head': 'Document Type Name', 'FieldName': 'docTypeName' }, 
    { 'Head': 'Document Mime Type Name', 'FieldName': 'docMimeTypeName' },
    {'Head': 'Action', 'FieldName': 'action' } ,
  
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

  editDocument(item: any) {
    // implement edit functionality
  }

  deleteDocument(item: any) {
  }

  download(item: any): void {
    // Implement download functionality
  }

  print(item: any): void {
    // Implement print functionality
  }


  isClicked = false;

  onSearchBoxClick() {

    this.isClicked = true;
  }
  

}


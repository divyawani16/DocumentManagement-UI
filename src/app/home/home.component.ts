import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentComponent } from '../add-document/add-document.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeService } from './home.service';
import { Document } from './home.model';
import { AddpropertyComponent } from '../addproperty/addproperty.component';
import { HttpEventType } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchValue: string = '';

  documentsList: Document[] | undefined;

  constructor(
    private dialog: MatDialog,
    private homeService: HomeService,
    private snackBar: MatSnackBar,
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
      data: {},

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  editDocument(document: Document) {
  
  }

  headArray = [  
    { 'Head': 'Document Name', 'FieldName': 'documentName' },  
    { 'Head': 'User Name ', 'FieldName': 'userName' }, 
    { 'Head': 'Property Name', 'FieldName': 'propertyName' },  
    { 'Head': 'Document Type', 'FieldName': 'docTypeName' }, 
    { 'Head': 'Document Mime Type', 'FieldName': 'docMimeTypeName' },
    {'Head': 'Action', 'FieldName': 'action' } ,
    { 'Head': 'View', 'FieldName': 'download' },
    {'Head': 'Status', 'FieldName': 'status', 'FieldType': 'toggle' }

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
  
  // updateApproval(document: Document) {
  //   const newApprovalStatus = !document.status; 

  //   this.homeService.updateDocumentApproval(document.documentId, newApprovalStatus).subscribe(
  //     () => {
  //       console.log('Document approval status updated successfully');
  //       document.status = newApprovalStatus;
  //       this.notifyUser(document); 
  //     },
  //     (error) => {
  //       console.error('Error updating document approval status:', error);
  //     }
  //   );
  // }

  // notifyUser(document: Document) {
  //   // Implement user notification logic here
  //   const message = document.status ? 'Your document has been approved' : 'Your document has been disapproved';
  //   this.snackBar.open(message, 'Dismiss', {
  //     duration: 3000
  //   });
  // }

  // download(item: any): void {
    
  // }

  print(item: any): void {
    // Implement print functionality
  }



  isClicked = false;
  onSearchBoxClick() {

    this.isClicked = true;
  }
  

}


import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentComponent } from '../add-document/add-document.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeService } from './home.service';
import { Document } from './home.model';
import { AddpropertyComponent } from '../addproperty/addproperty.component';
import { HttpEventType } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar';

import { HttpResponse } from '@angular/common/http';



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
    try {
      this.homeService.getDocuments()
        .subscribe(documents => this.documentsList = documents);
      console.log(this.documentsList);
    } catch (err) {
      console.log(err);
    }
    
  }


  // openDialog(): void {
  //   const dialogRef = this.dialog.open(AddDocumentComponent, {
  //     width: '450px',
  //     height: '500px',
  //     data: {},

  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log(result);
  //   });
  // }

  headArray = [
    { 'Head': 'Document Name', 'FieldName': 'documentName' },
    { 'Head': 'User Name ', 'FieldName': 'userName' },
    { 'Head': 'Property Name', 'FieldName': 'propertyName' },
    { 'Head': 'Document Type', 'FieldName': 'docTypeName' },
    { 'Head': 'Document Mime Type', 'FieldName': 'docMimeTypeName' },
    { 'Head': 'Action', 'FieldName': 'action' },
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

  editDocument(document: Document) {
  
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
=
  
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
=

  public download(documentId: number){
    console.log(documentId);
    const documentt = this.documentsList.find(doc => doc.documentId === documentId);
    
    if (documentId) {
      this.homeService.download (documentId).subscribe(
        (response: HttpResponse<Blob>) => {
          const contentDispositionHeader = response.headers.get('content-disposition');
          const fileName = contentDispositionHeader?.split(';')[1].split('=')[1];
          const url = window.URL.createObjectURL(response.body);
          const a = document.createElement('a');
          a.href = url;
          a.download = fileName || 'document';
          a.click();
          window.URL.revokeObjectURL(url);
        },
        (error: any) => {
          console.error('Error downloading document:', error);
        }
      );
    } else {
      console.error('Invalid documentId');
    }
  }
  
  
  

  print(item: any): void {
    // Handle printing
  }

  isClicked = false;

  onSearchBoxClick() {
    this.isClicked = true;
  }
}

// import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { AddDocumentComponent } from '../add-document/add-document.component';
// import { MatIconModule } from '@angular/material/icon';
// import { HomeService } from './home.service';
// import { Document } from './home.model';
// import { AddpropertyComponent } from '../addproperty/addproperty.component';
// import { HttpEventType } from '@angular/common/http';
// import { HttpResponse } from '@angular/common/http';


// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {
//   searchValue: string = '';

//   documentsList: Document[] | undefined;

//   constructor(
//     private dialog: MatDialog,
//     private homeService: HomeService
//   ) {}

//   ngOnInit() {
//     try{
//       this.homeService.getDocuments()
//       .subscribe(documents => this.documentsList = documents);
//       console.log(this.documentsList)
//     }catch(err){
//       console.log(err)
//     }
//   }

//   openDialog(): void {
//     const dialogRef = this.dialog.open(AddDocumentComponent, {
//       width: '450px',
//       height: '500px',
//       data: {},

//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       console.log(result);
//     });
//   }


//   headArray = [  
//     { 'Head': 'Document Name', 'FieldName': 'documentName' },  
//     { 'Head': 'User Name ', 'FieldName': 'userName' }, 
//     { 'Head': 'Property Name', 'FieldName': 'propertyName' },  
//     { 'Head': 'Document Type', 'FieldName': 'docTypeName' }, 
//     { 'Head': 'Document Mime Type', 'FieldName': 'docMimeTypeName' },
//     {'Head': 'Action', 'FieldName': 'action' } ,
//     { 'Head': 'View', 'FieldName': 'download' },
//   ];

//   filterData() {
//     console.log('Search value:', this.searchValue);
//     if (!this.searchValue) {
//       return this.documentsList;
//     }
//     const filteredList = this.documentsList.filter(document => {
//       return document.documentName.toLowerCase().includes(this.searchValue.toLowerCase());
//     });
//     console.log('Filtered list:', filteredList);
//     return filteredList;
//   }


//   search() {
//     console.log('Search value:', this.searchValue);
//     this.filterData();
//   }
//   editDocument(document: Document) {

//   }
 
//   deleteDocument(item: any) {
//     const index = this.documentsList.indexOf(item);
//     if (index > -1) {
//       this.documentsList.splice(index, 1);
//     }
  
//     this.homeService.deleteDocument(item.documentId).subscribe(
//       () => {
//         console.log('Record deleted successfully from the database');
//       },
//       (error) => {
//         console.error('Error deleting record from the database:', error);
//       }
//     );
//   }
  

// // public download():void {
// //   this.homeService.download()
// //   .subscribe(response=>
// //     {
// //       let fileName= response.headers.get('content-disposition')
// //       ?.split(';')[1].split('=')[1];
// //       let blob: Blob= response.boby as Blob;
// //       let a =document.createElement('a');
// //       a.download=fileName;
// //       a.href=window.URL.createObjectURL(blob);
// //       a.click();
// //     })
// public download(documentId: number): void {
//   console.log('Download method called with documentId:', documentId);
//   this.homeService.downloadDocument(documentId)
//     .subscribe((response: HttpResponse<Blob>) => {
//       const contentDispositionHeader = response.headers.get('content-disposition');
//       const fileName = contentDispositionHeader?.split(';')[1].split('=')[1];
//       const url = window.URL.createObjectURL(response.body);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = fileName;
//       a.click();
//       window.URL.revokeObjectURL(url);
//     });
// }





//   print(item: any): void {
  
//   }



//   isClicked = false;
//   onSearchBoxClick() {

//     this.isClicked = true;
//   }
  

// }


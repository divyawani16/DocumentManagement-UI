import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentComponent } from '../add-document/add-document.component';
import { HomeService } from './home.service';
import { Document } from './home.model';
import { EditDocumentComponent } from '../edit-document/edit-document.component';
import { HttpHeaders, HttpResponse } from '@angular/common/http';


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

  snackBar: any;


  constructor(
    private dialog: MatDialog,
    private homeService: HomeService
  ) {}


 
    // ngOnInit() {
    //   try {
    //     this.homeService.getDocuments()
    //       .subscribe(documents => {
    //         this.documentsList = documents;
    //         // console.log(this.documentsList);
         
    //       });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    

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
        console.log('Documents:', this.documentsList); // Print the entire documents list
        console.log('Document Ids:', this.documentsList.map(document => document.documentId)); // Print the documentIds
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
    { 'Head': 'Document Mime Type', 'FieldName': 'docMimeTypeName' },
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
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    });
  
    this.homeService.download(documentId)
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
  

  print(item: any): void {
    
  }

  isClicked = false;

  onSearchBoxClick() {
    this.isClicked = true;
  }
}

  

// updateApproval(document: Document) {
//   const newApprovalStatus = !document.status; 

//     this.homeService.updateDocumentApproval(document.documentId, newApprovalStatus).subscribe(
//       (updatedDocument: Document) => {
//         console.log(document.documentId, newApprovalStatus);
//         document.status = updatedDocument.status;
//         this.documentStatusUpdated.emit(updatedDocument); 
//         this.notifyUser(updatedDocument);
//       },
//       (error) => {
//         console.error('Error updating document approval status:', error);
//       }
//     );
//   }

//   handleDocumentStatusUpdated(updatedDocument: Document) {
   
//     console.log('Document status updated:', updatedDocument);
//     const index = this.documentsList.findIndex(doc => doc.documentId === updatedDocument.documentId);
//     if (index > -1) {
//       console.log(index);
//       this.documentsList[index].status = updatedDocument.status; 
//     }
//   }

//   notifyUser(document: Document) {

//     const message = document.status ? 'Your document has been approved' : 'Your document has been disapproved';
//     this.snackBar.open(message, 'Dismiss', {
//       duration: 3000
//     });
//   }

  // download(item: any): void {
    
  // }



  // public download(documentId: number){
  //   console.log(documentId);
  //   const documentt = this.documentsList.find(doc => doc.documentId === documentId);
    
  //   if (documentId) {
  //     this.homeService.download (documentId).subscribe(
  //       (response: HttpResponse<Blob>) => {
  //         const contentDispositionHeader = response.headers.get('content-disposition');
  //         const fileName = contentDispositionHeader?.split(';')[1].split('=')[1];
  //         const url = window.URL.createObjectURL(response.body);
  //         const a = document.createElement('a');
  //         a.href = url;
  //         a.download = fileName || 'document';
  //         a.click();
  //         window.URL.revokeObjectURL(url);
  //       },
  //       (error: any) => {
  //         console.error('Error downloading document:', error);
  //       }
  //     );
  //   } else {
  //     console.error('Invalid documentId');
  //   }
  
  
  
  

 

  




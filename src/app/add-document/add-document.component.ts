import { Component, OnInit,Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Document } from '../home/home.model';
import { HomeService } from '../home/home.service';
@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {
  document: Document=new Document();
  selectedFiles: FileList;
  fileNames: string[] = [];
  successMessageVisible: boolean = false;
  public isFormVisible = true;

  constructor(
    public dialogRef: MatDialogRef<AddDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private homeservice: HomeService
    ) {}
 
  ngOnInit(): void {
  }
  
  closeDialog(): void {
    this.dialogRef.close();
  }
  openDialog():void{
    this.isFormVisible=true;
  }
  uploadDocument(): void {
    const formData = new FormData();
    formData.append('documentName', this.document.documentName);
    formData.append('username', this.document.userName);
    formData.append('propertyName', this.document.propertyName);
    formData.append('docTypeName', this.document.docTypeName);
    formData.append('docMimeTypeName', this.document.docMimeTypeName);
  
    this.homeservice.createDocument(formData).subscribe(
      () => {
        console.log('Document created successfully');
        this.closeDialog();
      },
      (error) => {
        console.error('Error creating document:', error);
      }
    );
  }
  
  
  

  // uploadDocument(): void {
  //   this.homeservice.createDocument(this.document).subscribe(
  //     (createdDocument) => {
  //       console.log('Property created successfully:', createdDocument);
  //       this.closeDialog();
  //     },
  //     (error) => {
  //       console.error('Error creating document:', error);
  //     }
  //   );
  // }
  
  // handleFileInput(event): void {
  //   this.selectedFiles = event.target.files;
  //   const filesToUpload: File[] = [];
  //   for (let i = 0; i < this.selectedFiles.length; i++) {
  //     filesToUpload.push(this.selectedFiles.item(i));
  //     this.fileNames.push(this.selectedFiles.item(i).name);
  //   }
  // }
  // getFileNames(): string {
  //   let names = '';
  //   for (let i = 0; i < this.selectedFiles.length; i++) {
  //     if (i > 0) {
  //       names += ', ';
  //     }
  //     names += this.selectedFiles.item(i).name;
  //   }
  //   return names;
  // }
  // uploadDocuments(): void {
  //   // create a new FormData object
  //   const formData = new FormData();
  
  //   // append each selected file to the FormData object
  //   for (let i = 0; i < this.selectedFiles.length; i++) {
  //     formData.append("file[]", this.selectedFiles.item(i));
  //   }
  
    // send a POST request to the server to upload the documents
    // this.http.post('https://example.com/upload', formData).subscribe(
    //   (response) => {
    //     console.log('Documents uploaded successfully.');
    //     this.successMessageVisible = true;
    //   },
    //   (error) => {
    //     console.error('Error uploading documents:', error);
    //   }
    // );
  
  
  closeForm():void{
    this.closeDialog();
  }
  
  handleFileInput(event: any) {
    this.selectedFiles = event.target.files;
    this.fileNames = [];
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.fileNames.push(this.selectedFiles[i].name);
    }
  }
  
}
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Document } from '../home/home.model';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {
  document: Document = new Document();
  selectedFiles: FileList;
  fileNames: string[] = [];
  successMessageVisible: boolean = false;
  public isFormVisible = true;

  constructor(
    public dialogRef: MatDialogRef<AddDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private homeservice: HomeService
  ) {}

  ngOnInit(): void {}

  uploadDocument(): void {
    if (!this.selectedFiles || this.selectedFiles.length === 0) {
      console.error('No file selected.');
      return;
    }
  
    const formData = new FormData();
    formData.append('documentName', this.document.documentName);
    formData.append('username', this.document.userName);
    formData.append('propertyName', this.document.propertyName);
    formData.append('docTypeName', this.document.docTypeName);
    formData.append('docMimeTypeName', this.document.docMimeTypeName);
    formData.append('file', this.selectedFiles[0]);
  
    this.homeservice.createDocument(formData).subscribe(
      () => {
        console.log('Document created successfully');
        this.closeDialog();
      },
      (error) => {
        console.error('Error creating document:', error);
      },
      () => {
        
      }
    );
  }
  

  handleFileInput(event: any): void {
    this.selectedFiles = event.target.files;
    this.fileNames = [];
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.fileNames.push(this.selectedFiles[i].name);
    }
  }

  closeForm(): void {
    this.closeDialog();
  }
  
  closeDialog(): void {
    this.dialogRef.close();
  }
}

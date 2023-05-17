import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PropertyService } from '../property/property.service';
import { Document } from '../property/property.model';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.scss']
})
export class AddpropertyComponent implements OnInit {
  property: Document = new Document();
  selectedFiles: FileList;
  fileNames: string[] = [];
  successMessageVisible: boolean = false;
  public isFormVisible = true;

    constructor(
      public dialogRef: MatDialogRef<AddpropertyComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private propertyService: PropertyService
    ) {}
  ngOnInit(): void {
  }
  
  closeDialog(): void {
    this.dialogRef.close();
  }
  openDialog():void{
    this.isFormVisible=true;
  }

  uploadProperty(): void {
    this.propertyService.createProperty(this.property).subscribe(
      (createdProperty) => {
        console.log('Property created successfully:', createdProperty);
        this.closeDialog();
      },
      (error) => {
        console.error('Error creating property:', error);
      }
    );
  }
  
  closeForm():void{
    this.closeDialog();
  }
  
  // openDialog():void{
  //   this.isFormVisible=true;
  // }
  
}
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

  
    // append each selected file to the FormData object
    // for (let i = 0; i < this.selectedFiles.length; i++) {
    //   formData.append("file[]", this.selectedFiles.item(i));
    // }
  
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




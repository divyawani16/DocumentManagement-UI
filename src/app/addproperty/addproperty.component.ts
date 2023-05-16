import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.scss']
})
export class AddpropertyComponent implements OnInit {

  selectedFiles: FileList;
  fileNames: string[] = [];
  successMessageVisible: boolean = false;
  public isFormVisible = true;

  constructor(
    public dialogRef: MatDialogRef<AddpropertyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  
  ngOnInit(): void {
  }
  
  closeDialog(): void {
    this.dialogRef.close();
  }
  openDialog():void{
    this.isFormVisible=true;
  }
  
  handleFileInput(event): void {
    this.selectedFiles = event.target.files;
    const filesToUpload: File[] = [];
    for (let i = 0; i < this.selectedFiles.length; i++) {
      filesToUpload.push(this.selectedFiles.item(i));
      this.fileNames.push(this.selectedFiles.item(i).name);
    }
  }
  getFileNames(): string {
    let names = '';
    for (let i = 0; i < this.selectedFiles.length; i++) {
      if (i > 0) {
        names += ', ';
      }
      names += this.selectedFiles.item(i).name;
    }
    return names;
  }
  uploadDocuments(): void {
    // create a new FormData object
    const formData = new FormData();
  
    // append each selected file to the FormData object
    for (let i = 0; i < this.selectedFiles.length; i++) {
      formData.append("file[]", this.selectedFiles.item(i));
    }
  
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
  }
  
  closeForm():void{
    this.closeDialog();
  }
  
  // openDialog():void{
  //   this.isFormVisible=true;
  // }
  
}



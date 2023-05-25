import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from '../users/users.service';
import { Document } from '../users/users.model';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  users: Document = new Document();
  selectedFiles: FileList;
  fileNames: string[] = [];
  successMessageVisible: boolean = false;
  public isFormVisible = true;

  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  private usersService: UsersService;
  ngOnInit(): void {
  }
  
  closeDialog(): void {
    this.dialogRef.close();
  }
  openDialog():void{
    this.isFormVisible=true;
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

  uploadUsers(): void {
    this.usersService.createUsers(this.users).subscribe(
      (createdUsers) => {
        console.log('Property created successfully:', createdUsers);
        this.closeDialog();
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    );
  }
  // uploadDocuments(): void {
  //   // create a new FormData object
  //   const formData = new FormData();
  
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
  
  
  closeForm():void{
    this.closeDialog();
  }
  
  

}

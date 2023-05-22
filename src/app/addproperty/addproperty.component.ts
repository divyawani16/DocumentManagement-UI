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
  
}
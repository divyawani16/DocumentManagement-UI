import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Document } from '../property/property.model';
import { PropertyService } from '../property/property.service';
import { TenantPropertyService } from '../tenant-property/tenant-property.service';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.scss']
})
export class EditPropertyComponent implements OnInit {
  property: Document;
  updatedProperty: Document;

  constructor(
    public dialogRef: MatDialogRef<EditPropertyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private propertyService: PropertyService,

  ) { }

  ngOnInit(): void {
    this.property = { ...this.data.property };
    this.updatedProperty = { ...this.data.property };
  }

  saveChanges(): void {
  
    this.propertyService.updateProperty(this.property.propertyId, this.updatedProperty)
      .subscribe(
        updatedProperty => {
          console.log('Property updated successfully:', updatedProperty);
         
          this.dialogRef.close(updatedProperty);
        },
        error => {
          console.error('Error updating property:', error);
          
        }
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { OwnerPropertyService } from './owner-property.service';
import { Document } from './owner-property.model';
import { MatDialog } from '@angular/material/dialog';
import { AddpropertyComponent } from '../addproperty/addproperty.component';

@Component({
  selector: 'app-owner-property',
  templateUrl: './owner-property.component.html',
  styleUrls: ['./owner-property.component.scss']
})
export class OwnerPropertyComponent implements OnInit {
  Propertylist: Document[] | undefined;
  searchValue: any;
  constructor(
    private OwnerPropertyService:OwnerPropertyService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    try{
      this.OwnerPropertyService.getProperty()
      .subscribe(property => this.Propertylist = property);
      console.log('Propertylist:', this.Propertylist);
    }catch(err){
      console.log(err)
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddpropertyComponent, {
      width: '500px',
      height: '700px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  deleteProperty(item: any) {
    const index = this.Propertylist.indexOf(item);
    if (index > -1) {
      this.Propertylist.splice(index, 1);
    }
  
    this.OwnerPropertyService.deleteProperty(item.propertyId).subscribe(
      () => {
        console.log('Record deleted successfully from the database');
      },
      (error) => {
        console.error('Error deleting record from the database:', error);
      }
    );
  }
  

  headArray = [
    { 'Head': 'Property Name', 'FieldName': 'propertyName' },
    { 'Head': 'Building', 'FieldName': 'building' },
    { 'Head': 'Floor Number', 'FieldName': 'floorNumber' },
    { 'Head': 'Flat Number', 'FieldName': 'flatNumber' },
    { 'Head': 'Address', 'FieldName': 'address' },
    { 'Head': 'City', 'FieldName': 'city' },
    { 'Head': 'Pincode', 'FieldName': 'pincode' },
    { 'Head': 'Action', 'FieldName': 'action' }

  ];

  editDocument(document: Document) {
  
  }

  filterData() {
    console.log('Search value:', this.searchValue);
    if (!this.searchValue) {
      return this.Propertylist;
    }
  //   const filteredList = this.Propertylist.filter(document => {
  //     return document.documentName.toLowerCase().includes(this.searchValue.toLowerCase());
  //   });
  //   console.log('Filtered list:', filteredList);
  //   return filteredList;
  // }
 
}
}

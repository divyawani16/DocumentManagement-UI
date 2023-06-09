import { Component, OnInit } from '@angular/core';
import { Document } from './property.model';
import { PropertyService } from './property.service';
import { MatDialog } from '@angular/material/dialog';
import { AddpropertyComponent } from '../addproperty/addproperty.component';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  searchValue: string = '';
  
  Propertylist: Document[] | undefined;

  constructor(
    private dialog: MatDialog,
    private PropertyService : PropertyService) { }

  ngOnInit() {
    try{
      this.PropertyService.getProperty()
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
  
  filterData() {
    console.log('Search value:', this.searchValue);
    if (!this.searchValue) {
      return this.Propertylist;
    }
    const filteredList = this.Propertylist.filter(property => {
      return property.propertyName.toLowerCase().includes(this.searchValue.toLowerCase());
    });
    console.log('Filtered list:', filteredList);
    return filteredList;
  }

  search() {
    console.log('Search value:', this.searchValue);
    this.filterData();
  }

  editProperty(item: any) {
    
  }
  deleteProperty(item: any) {
    const index = this.Propertylist.indexOf(item);
    if (index > -1) {
      this.Propertylist.splice(index, 1);
    }
  
    this.PropertyService.deleteProperty(item.propertyId).subscribe(
      () => {
        console.log('Record deleted successfully from the database');
      },
      (error) => {
        console.error('Error deleting record from the database:', error);
      }
    );
  }
  
  
  isClicked = false;

  onSearchBoxClick() {

    this.  isClicked = true;
  }

}
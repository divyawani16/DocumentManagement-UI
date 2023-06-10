import { Component, OnInit } from '@angular/core';
import { TenantPropertyService } from './tenant-property.service';
import { Document } from './tenant-property.model';
@Component({
  selector: 'app-tenant-property',
  templateUrl: './tenant-property.component.html',
  styleUrls: ['./tenant-property.component.scss']
})
export class TenantPropertyComponent implements OnInit {
  searchValue: string = '';
  Propertylist: Document[] | undefined;
  
  isClicked = false;

  onSearchBoxClick() {

    this.isClicked = true;
  }
  constructor(
    private TenantPropertyService:TenantPropertyService
  ) { }


  ngOnInit(): void {
    this.TenantPropertyService.getProperty()
      .subscribe(
        (property) => {
          this.Propertylist = property;
          console.log('Propertylist:', this.Propertylist);
        },
        (error) => {
          console.error('Error:', error);
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
    //{ 'Head': 'Action', 'FieldName': 'action' }
  ];

  editDocument(document: Document) {
  
  }

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

  //   const filteredList = this.Propertylist.filter(document => {
  //     return document.documentName.toLowerCase().includes(this.searchValue.toLowerCase());
  //   });
  //   console.log('Filtered list:', filteredList);
  //   return filteredList;
  // }
 

}

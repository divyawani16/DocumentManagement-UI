import { Component, OnInit } from '@angular/core';
import { OwnerPropertyService } from './owner-property.service';
import { Document } from './owner-property.model';

@Component({
  selector: 'app-owner-property',
  templateUrl: './owner-property.component.html',
  styleUrls: ['./owner-property.component.scss']
})
export class OwnerPropertyComponent implements OnInit {
  Propertylist: Document[] | undefined;
  searchValue: any;
  constructor(
    private OwnerPropertyService:OwnerPropertyService
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

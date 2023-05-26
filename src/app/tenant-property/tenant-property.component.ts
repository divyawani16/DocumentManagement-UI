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
  constructor(
    private TenantPropertyService:TenantPropertyService
  ) { }

  ngOnInit(): void {
    try{
      this.TenantPropertyService.getProperty()
      .subscribe(property => this.Propertylist = property);
      console.log('Propertylist:', this.Propertylist);
    }catch(err){
      console.log(err)
    }
  }
  headArray = [  
    { 'Head': 'Document Name', 'FieldName': 'documentName' },  
    { 'Head': 'User Name ', 'FieldName': 'userName' }, 
    { 'Head': 'Property Name', 'FieldName': 'propertyName' },  
    { 'Head': 'Document Type', 'FieldName': 'docTypeName' }, 
    { 'Head': 'Document Mime Type', 'FieldName': 'docMimeTypeName' },
    {'Head': 'Action', 'FieldName': 'action' } ,
    { 'Head': 'View', 'FieldName': 'download' },

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

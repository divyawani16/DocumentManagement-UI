import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentComponent } from '../add-document/add-document.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchValue: string = '';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDocumentComponent, {
      width: '450px',
      height: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  usersList: any[] = [
    { Id: 1, Name: 'John Smith', property_name: '@example.com', user: '234', created_date: 'com', status: 'active', },
    { Id: 2, Name: 'anu', property_name: 'john.smith@example.com', user: '4', created_date: 'example.com', status: 'active', },
    { Id: 3, Name: 'Smith2', property_name: 'abc.smith@example.com', user: '555', created_date: 'www.example.com', status: 'active', },
  ];

  headArray = [
    { 'Head': 'Name', 'FieldName': 'Name' },
    { 'Head': 'property_name', 'FieldName': 'property_name' },
    { 'Head': 'user', 'FieldName': 'user' },
    { 'Head': 'created_date', 'FieldName': 'created_date' },
    { 'Head': 'status', 'FieldName': 'status' },
    { 'Head': 'Action', 'FieldName': '' }
  ];

  ngOnInit(): void {
    console.log('Users list:', this.usersList);
  }

  filterData() {
    console.log('Search value:', this.searchValue);
    if (!this.searchValue) {
      return this.usersList;
    }
    const filteredList = this.usersList.filter(user => {
      return user.Name.toLowerCase().includes(this.searchValue.toLowerCase());
    });
    console.log('Filtered list:', filteredList);
    return filteredList;
  }
  

  search() {
    console.log('Search value:', this.searchValue);
    this.filterData();
  }

  editUser(item: any) {
    // implement edit functionality
  }

  deleteUser(item: any) {
    // implement delete functionality
  }

  isSearchBoxClicked = false;

  onSearchBoxClick() {
    this.isSearchBoxClicked = true;
  }

}

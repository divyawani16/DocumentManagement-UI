import { Component, OnInit } from '@angular/core';
import { Document } from './users.model';
import { UsersService } from './users.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  searchValue: string = '';
  userslist: Document[] | undefined;

  constructor(
    private dialog: MatDialog,
    private usersService: UsersService) { }

  ngOnInit() {
    try{
      this.usersService.getUsers()
      .subscribe(users => this.userslist = users);
      console.log(this.userslist)
    }catch(err){
      console.log(err)
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '450px',
      height: '600px',
      data: {},

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }


  headArray = [  
    { 'Head': 'firstName', 'FieldName': 'firstName' },  
    { 'Head': 'lastName', 'FieldName': 'lastName' }, 
    { 'Head': 'username', 'FieldName': 'username' },  
    { 'Head': 'password', 'FieldName': 'password' }, 
    {'Head': 'emailId', 'FieldName': 'emailId'},
    { 'Head': 'phoneNumber', 'FieldName': 'phoneNumber' }, 
    { 'Head': 'Action', 'FieldName': 'action' }
  ];

  filterData() {
    console.log('Search value:', this.searchValue);
    if (!this.searchValue) {
      return this.userslist;
    }
    const filteredList = this.userslist.filter(document => {
      return document.username.toLowerCase().includes(this.searchValue.toLowerCase());
    });
    console.log('Filtered list:', filteredList);
    return filteredList;
  }

  search() {
    console.log('Search value:', this.searchValue);
    this.filterData();
  }

  editUser(document: Document) {
    
  }

  deleteUser(document: Document) {
  }


  isClicked = false;

  onSearchBoxClick() {

    this.isClicked = true;
  }
  
  }
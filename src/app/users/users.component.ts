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
      height: '500px',
      data: {},

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }


  headArray = [  
    { 'Head': 'First Name', 'FieldName': 'firstName' },  
    { 'Head': 'Last Name', 'FieldName': 'lastName' }, 
    { 'Head': 'User Name', 'FieldName': 'username' },  
    //{ 'Head': 'Password', 'FieldName': 'password' }, 
    //{'Head': 'emailId', 'FieldName': 'emailId'},
    { 'Head': 'Phone Number', 'FieldName': 'phoneNumber' }, 

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



  isClicked = false;

  onSearchBoxClick() {

    this.isClicked = true;
  }
  
  }
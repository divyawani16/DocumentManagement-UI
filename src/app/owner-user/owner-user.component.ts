import { Component, OnInit } from '@angular/core';
import { Document } from './owner-user.model';
import { OwnerUserService } from './owner-user.service';

@Component({
  selector: 'app-owner-user',
  templateUrl: './owner-user.component.html',
  styleUrls: ['./owner-user.component.scss']
})
export class OwnerUserComponent implements OnInit {
  searchValue: string = '';
  userslist: Document[] | undefined;

  
  isClicked = false;

  onSearchBoxClick() {

    this.isClicked = true;
  }
  
  filteredUsersList: Document[] | undefined;
  constructor( 
    private OwnerUserService: OwnerUserService ) { }

  ngOnInit(): void {
    try{
      this.OwnerUserService.getUsers()
      .subscribe(users => this.userslist = users);
      console.log(this.userslist)
      
      
    }catch(err){
      console.log(err)
    }
    
  }
  headArray = [  
    { 'Head': 'First Name', 'FieldName': 'firstName' },  
    { 'Head': 'Last Name', 'FieldName': 'lastName' }, 
    { 'Head': 'User Name', 'FieldName': 'username' },  
    //{ 'Head': 'Password', 'FieldName': 'password' }, 
    {'Head': 'emailId', 'FieldName': 'emailId'},
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
}

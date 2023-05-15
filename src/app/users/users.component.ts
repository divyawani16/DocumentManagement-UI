import { Component, OnInit } from '@angular/core';
import { Document } from './users.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userslist: Document[] | undefined;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    try{
      this.usersService.getUsers()
      .subscribe(users => this.userslist = users);
    }catch(err){
      console.log(err)
    }
  }
  }
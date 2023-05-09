import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';
export interface PeriodicElement {
  Document_Name: string;
  No: number;
  PropertyName: string;
  User: string;
  Date: string;
  Status:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {No: 1, Document_Name: 'Hydrogen', PropertyName: '1.0079', User: 'H',Date:'2/3/20',Status:'Active' },
  {No: 2, Document_Name: 'Helium', PropertyName:'4.0026', User: 'He',Date:'2/3/20',Status:'Active'},
  {No: 3, Document_Name: 'Lithium', PropertyName: '6.941', User: 'Li',Date:'2/3/20',Status:'Active'},
  {No: 4, Document_Name: 'Beryllium', PropertyName: '9.0122', User: 'Be',Date:'2/3/20',Status:'Active'},
  {No: 5, Document_Name: 'Boron', PropertyName: '10.811', User: 'B',Date:'2/3/20',Status:'Active'},
  {No: 6, Document_Name: 'Carbon', PropertyName: '12.0107', User: 'C',Date:'2/3/20',Status:'Active'},
  {No: 7, Document_Name: 'Nitrogen', PropertyName: '14.0067', User: 'N',Date:'2/3/20',Status:'Active'},
  {No: 8, Document_Name: 'Oxygen', PropertyName: '15.9994', User: 'O',Date:'2/3/20',Status:'Active'},
  {No: 9, Document_Name: 'Fluorine', PropertyName: '18.9984', User: 'F',Date:'2/3/20',Status:'Active'},
  {No: 10, Document_Name: 'Neon', PropertyName: '20.1797', User: 'Ne',Date:'2/3/20',Status:'Active'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchText: string = '';

  displayedColumns: string[] = ['No.', 'Document Name', 'PropertyName', 'User','Created Date','Status'];
  dataSource = ELEMENT_DATA;
  addDocument(event: Event) {
    event.stopPropagation();
    // Add document logic here
  }
  isSearchBoxClicked = false;

  onSearchBoxClick() {
    this.isSearchBoxClicked = true;
  }
  
}

  

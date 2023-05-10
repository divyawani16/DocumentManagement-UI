import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';
import { Column } from '../table/column';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentComponent } from '../add-document/add-document.component';
// export interface PeriodicElement {
//   Document_Name: string;
//   No: number;
//   PropertyName: string;
//   User: string;
//   Date: string;
//   Status:string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {No: 1, Document_Name: 'Hydrogen', PropertyName: '1.0079', User: 'H',Date:'2/3/20',Status:'Active' },
//   {No: 2, Document_Name: 'Helium', PropertyName:'4.0026', User: 'He',Date:'2/3/20',Status:'Active'},
//   {No: 3, Document_Name: 'Lithium', PropertyName: '6.941', User: 'Li',Date:'2/3/20',Status:'Active'},
//   {No: 4, Document_Name: 'Beryllium', PropertyName: '9.0122', User: 'Be',Date:'2/3/20',Status:'Active'},
//   {No: 5, Document_Name: 'Boron', PropertyName: '10.811', User: 'B',Date:'2/3/20',Status:'Active'},
//   {No: 6, Document_Name: 'Carbon', PropertyName: '12.0107', User: 'C',Date:'2/3/20',Status:'Active'},
//   {No: 7, Document_Name: 'Nitrogen', PropertyName: '14.0067', User: 'N',Date:'2/3/20',Status:'Active'},
//   {No: 8, Document_Name: 'Oxygen', PropertyName: '15.9994', User: 'O',Date:'2/3/20',Status:'Active'},
//   {No: 9, Document_Name: 'Fluorine', PropertyName: '18.9984', User: 'F',Date:'2/3/20',Status:'Active'},
//   {No: 10, Document_Name: 'Neon', PropertyName: '20.1797', User: 'Ne',Date:'2/3/20',Status:'Active'},
// ];

export interface Element {
  position: number,
  name: string,
  weight: number,
  symbol: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDocumentComponent,{
      width: '640px',disableClose: true 
    });
}

  ngOnInit(): void {
  }

  searchText: string = '';


  tableColumns: Array<Column> = [
    {
      columnDef: 'position',
      header: 'Position',
      cell: (element: Record<string, any>) => `${element['position']}`
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
      isLink: true,
      url: 'abc'
    },
    {
      columnDef: 'weight',
      header: 'Weight',
      cell: (element: Record<string, any>) => `${element['weight']}`
    },
    {
      columnDef: 'symbol',
      header: 'Symbol',
      cell: (element: Record<string, any>) => `${element['symbol']}`
    }
  ];

  tableData: Array<Element> = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
  ];

  isSearchBoxClicked = false;

  onSearchBoxClick() {
    this.isSearchBoxClicked = true;
  }

  // buttonTriggered(evt){
  //   console.log(evt)
  // }
  
}

  

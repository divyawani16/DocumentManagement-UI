import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';
import { Column } from '../table/column';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentComponent } from '../add-document/add-document.component';
import { Document } from './home.model';
import { HomeService } from './home.service';

@Component({
    selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    documentslist: Document[] | undefined;
  
    constructor(private homeService: HomeService) { }
  
    ngOnInit() {
      try{
        this.homeService.getDocuments()
        .subscribe(users => this.documentslist = users);
      }catch(err){
        console.log(err)
      }
    }
    }

  //searchText: string = '';


//   tableColumns: Array<Column> = [
//     {
//       columnDef: 'documentId',
//       header: 'documentId',
//       cell: (element: Record<string, any>) => `${element['documentId']}`
//     },
//     {
//       columnDef: 'documentName',
//       header: 'documentName',
//       cell: (element: Record<string, any>) => `${element['documentName']}`,
//       isLink: true,
//       url: 'abc'
//     },
//     {
//       columnDef: 'userId',
//       header: 'userId',
//       cell: (element: Record<string, any>) => `${element['userId']}`
//     },
//     {
//       columnDef: 'propertyId',
//       header: 'propertyId',
//       cell: (element: Record<string, any>) => `${element['propertyId']}`
//     },
//     {
//       columnDef: 'docTypeId',
//       header: 'docTypeId',
//       cell: (element: Record<string, any>) => `${element['docTypeId']}`
//     },
//     {
//       columnDef: 'docMimeTypeId',
//       header: 'docMimeTypeId',
//       cell: (element: Record<string, any>) => `${element['docMimeTypeId']}`
//     }
//   ];

//   // tableData: Array<Element> = [
//   //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   //   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   //   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   //   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   //   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
//   // ];

//   isSearchBoxClicked = false;

//   onSearchBoxClick() {
//     this.isSearchBoxClicked = true;
//   }

//   // buttonTriggered(evt){
//   //   console.log(evt)
//   // }
  
// }

  
// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }


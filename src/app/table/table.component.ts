import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { Document } from '../home/home.model';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit {
  @Input() GridArray: any[];
  @Input() GridHeadArray: any[];
  @Input() filteredData!: any[];
  @Input() HeadArray :any[] = [];
  // @ViewChild(MatPaginator) paginator: MatPaginator; 
  private _gridArray: any[] = [];
  dataSource: MatTableDataSource<any>;
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onDownload = new EventEmitter<any>();
  @Output() onPrint = new EventEmitter<any>();
  @Output() documentStatusUpdated: EventEmitter<Document> = new EventEmitter<Document>();
  // totalRecords: number = 0;
  // pageSize: number = 5;
  constructor(private router: Router) { }


  ngOnInit(): void {
    

  }
  edit(item: any) {
   
    this.onEdit.emit(item);
  }
  delete(item: any) {

    this.onDelete.emit(item);
  }

  download(item: any) {
    this.onDownload.emit(item);
  }

  print(item: any) {
    this.onPrint.emit(item);
  }
  getStatusText(status: boolean): string {
    return status ? 'Approved' : 'Not Approved';
  }

  getStatusColor(status: boolean): string {
    return status ? 'green' : 'red';
  }
  
  // onUpdateApproval(document: Document) {
  //   this.updateApproval.emit(document);
   
  // }
  isHomeRoute(): boolean {
    return this.router.url === '/home';
  }

  isDocumentRoute(): boolean {
    const currentUrl = this.router.url;
    return currentUrl === '/your-document' || currentUrl === '/owner-document';
  }
  // form(b:boolean,i:number)
  // {
  //   console.log(!b,i);
  // }
  form(b: boolean, documentId: number | null) {
    if (documentId === null) {
     console.log("true");
    } else {
      console.log("false");
    }
  }
  // updateApproval(document: Document) {
  //   const newApprovalStatus = !document.status; // Flip the current approval status

  //   // Emit an event to notify the parent component about the updated status
  //   this.documentStatusUpdated.emit({
  //     ...document,
  //     status: newApprovalStatus
  //   });
  // }

  
}
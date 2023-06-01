import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

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
  @Output() updateApproval: EventEmitter<Document> = new EventEmitter<Document>();

  // totalRecords: number = 0;
  // pageSize: number = 5;
  constructor() { }

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
  
  onUpdateApproval(document: Document) {
    this.updateApproval.emit(document);
  }
}
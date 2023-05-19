import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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
  
  private _gridArray: any[] = [];
  dataSource: MatTableDataSource<any>;
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

  }
  edit(item: any) {
    debugger;
    this.onEdit.emit(item);
  }
  delete(item: any) {

    this.onDelete.emit(item);
  }
}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
//import { Column } from './column';


// export interface Column {
//   columnDef: string;
//   header: string;
//   cell: Function;
//   isLink?: boolean;
//   url?: string;
// }


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit {
  @Input() GridArray: any[];
  @Input() GridHeadArray: any[];
  // @Input()
  // tableColumns: Array<Column> = [];

  // @Input()
  // tableData: Array<T> = [];

  // displayedColumns: Array<string> = [];
  // dataSource: MatTableDataSource<T> = new MatTableDataSource();

  // constructor() {}

  // ngOnInit(): void {
  //   this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
  //   this.dataSource = new MatTableDataSource(this.tableData);
  // }
  @Input() filteredData!: any[];

  
  @Input() HeadArray :any[] = [];
  // @Input() GridArray :any[] = []; 
  private _gridArray: any[] = [];
  dataSource: MatTableDataSource<any>;
// @Input()
// set GridArray(value: any[]) {
//   this._gridArray = value;
//   this.dataSource = new MatTableDataSource(this.filteredData.length > 0 ? this.filteredData : this._gridArray);
// }
// get GridArray() {
// //   return this._gridArray;
// }

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
    debugger;
    this.onDelete.emit(item);
  }
  
  // @Output() buttonClicked = new EventEmitter<string>();

  // onButtonClicked(){
  //   this.buttonClicked.emit('how');
  // }
}
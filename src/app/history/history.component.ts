import { Component, OnInit } from '@angular/core';
import { Document} from './history.model';
import { HistoryService } from './history.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  searchValue: string = '';
  DocumentAuditlist: Document[] | undefined;

  constructor(private HistoryService: HistoryService) { }

  ngOnInit() {
    try{
      this.HistoryService.getDocumentAudit()
      .subscribe(documentAudit => this.DocumentAuditlist = documentAudit);
      console.log(this.DocumentAuditlist);
    }catch(err){
      console.log(err)
    }
  }
  headArray = [  
    { 'Head': 'stageId', 'FieldName': 'stageId' },  
    { 'Head': 'finishedBy', 'FieldName': 'finishedBy' }, 
    { 'Head': 'finishedOn', 'FieldName': 'finishedOn' },  
    { 'Head': 'documentVersionId ', 'FieldName': 'documentVersionId' }, 
    {'Head': 'Action', 'FieldName': 'action' } 
  ];

  // filterData() {
  //   console.log('Search value:', this.searchValue);
  //   if (!this.searchValue) {
  //     return this.DocumentAuditlist;
  //   }
  //   const filteredList = this.DocumentAuditlist.filter(document => {
  //     return document.stageId.toLowerCase().includes(this.searchValue.toLowerCase());
  //   });
  //   console.log('Filtered list:', filteredList);
  //   return filteredList;
  // }
  // search() {
  //   console.log('Search value:', this.searchValue);
  //   this.filterData();
  // }

  editDocument(document: Document) {
    // implement edit functionality
  }

  deleteDocument(document: Document) {
  }

  isClicked = false;

  onSearchBoxClick() {

    this.isClicked = true;
  }
  
  }
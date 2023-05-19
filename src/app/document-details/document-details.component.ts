import { Component, OnInit } from '@angular/core';
import { Document } from './document-details.model';
import { DocumentDetailsService } from './document-details.service';
@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.scss']
})
export class DocumentDetailsComponent implements OnInit {
  searchValue: string = '';

  DocumentVersionlist: Document[] | undefined;

  constructor(private DocumentDetailsService: DocumentDetailsService) { }

  ngOnInit() {
    try{
      this.DocumentDetailsService.getDocumentVersion()
      .subscribe(documentVersions => this.DocumentVersionlist = documentVersions);
      console.log(this.DocumentVersionlist);
    }catch(err){
      console.log(err)
    }
  }

  headArray = [  
  //  { 'Head': 'Document', 'FieldName': 'documentId' },  
    { 'Head': 'Stage Id', 'FieldName': 'stageId' }, 
    { 'Head': 'Version Number', 'FieldName': 'versionNumber' },  
    { 'Head': 'Location', 'FieldName': 'location' }, 
    { 'Head': 'Created By', 'FieldName': 'createdBy' }, 
    { 'Head': 'Created Date', 'FieldName': 'createdDate' }, 
    { 'Head': 'Updated By', 'FieldName': 'updatedBy' }, 
    { 'Head': 'Updated Date', 'FieldName': 'updatedDate' }, 

  ];

  filterData() {
    console.log('Search value:', this.searchValue);
    if (!this.searchValue) {
      return this.DocumentVersionlist;
    }
    const filteredList = this.DocumentVersionlist.filter(document => {
      return document.documentName.toLowerCase().includes(this.searchValue.toLowerCase());
    });
    console.log('Filtered list:', filteredList);
    return filteredList;
  }
  search() {
    console.log('Search value:', this.searchValue);
    this.filterData();
  }

  editDocument(document: Document) {
    
  }

  deleteDocument(document: Document) {
  }


  isClicked = false;

  onSearchBoxClick() {

    this.isClicked = true;
  }

  }

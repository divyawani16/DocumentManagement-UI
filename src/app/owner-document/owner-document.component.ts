import { Component, OnInit } from '@angular/core';
import { OwnerDocumentService } from './owner-document.service';
import { Document } from './owner-document.model';
@Component({
  selector: 'app-owner-document',
  templateUrl: './owner-document.component.html',
  styleUrls: ['./owner-document.component.scss']
})
export class OwnerDocumentComponent implements OnInit {
  documentsList: Document[] | undefined;
  constructor(
    private OwnerDocumentService : OwnerDocumentService
  ) { }

  ngOnInit(): void {
    try{
      this.OwnerDocumentService.getDocuments()
      .subscribe(documents => this.documentsList = documents);
      console.log(this.documentsList)
    }catch(err){
      console.log(err)
    }
  }

}

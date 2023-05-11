import { Component, OnInit } from '@angular/core';
import { Document } from './document-details.model';
import { DocumentDetailsService } from './document-details.service';
@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.scss']
})
export class DocumentDetailsComponent implements OnInit {

  DocumentVersionlist: Document[] | undefined;

  constructor(private DocumentDetailsService : DocumentDetailsService) { }

  ngOnInit() {
    try{
      this.DocumentDetailsService.getDocumentVersion()
      .subscribe(documentVersions => this.DocumentVersionlist = documentVersions);
    }catch(err){
      console.log(err)
    }
  }
  }
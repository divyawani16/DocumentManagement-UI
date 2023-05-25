import { Component, OnInit } from '@angular/core';
import { Document } from './tenant-document.model';
import { TenantDocumentService } from './tenant-document.service';
@Component({
  selector: 'app-tenant-document',
  templateUrl: './tenant-document.component.html',
  styleUrls: ['./tenant-document.component.scss']
})
export class TenantDocumentComponent implements OnInit {

  documentsList: Document[] | undefined;
  constructor(
    private TenantDocumentService : TenantDocumentService
  ) { }

  ngOnInit(): void {
    try{
      this.TenantDocumentService.getDocuments()
      .subscribe(documents => this.documentsList = documents);
      console.log(this.documentsList)
    }catch(err){
      console.log(err)
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Document} from './history.model';
import { HistoryService } from './history.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

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
  }
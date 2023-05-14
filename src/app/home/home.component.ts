import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';
import { Column } from '../table/column';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentComponent } from '../add-document/add-document.component';
import { HomeService } from './home.service';
import { Document } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
  documentslist: Document[] | undefined;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    try{
      this.homeService.getDocuments()
      .subscribe(documents => this.documentslist = documents);
    }catch(err){
      console.log(err)
    }
    
  }
  
  
}

  

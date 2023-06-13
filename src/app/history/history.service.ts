import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from './history.model';
//import { backendurl } from '../config';
@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private baseUrl:string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'https://localhost:8089/document-audit/';
  }

   public getDocumentAudit(): Observable<Document[]> {
    return this.http.get<Document[]>(this.baseUrl);
  }
}


import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from './document-details.model';
@Injectable({
  providedIn: 'root'
})
export class DocumentDetailsService {

  private baseUrl:string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8089/api/v1/documentVersions/';
  }

   public getDocumentVersion(): Observable<Document[]> {
    return this.http.get<Document[]>(this.baseUrl);
  }
}

import { Injectable } from '@angular/core';
import { Document } from './owner-document.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OwnerDocumentService {
  
  private baseUrl:string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8089/api/documents';
  }

   public getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.baseUrl}/propertyname`);
  }
}

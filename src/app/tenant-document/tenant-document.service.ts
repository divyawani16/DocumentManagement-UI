import { Injectable } from '@angular/core';
import { Document } from './tenant-document.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TenantDocumentService {

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8089/api/documents';
  }
  private baseUrl:string;

   public getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.baseUrl}/documentsdetails`);
  }
}
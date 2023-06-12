import { Injectable } from '@angular/core';
import { Document } from './tenant-document.model';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TenantDocumentService {

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8089/api/documents';
  }
  private baseUrl:string;

   public getDocuments(tenantId:number): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.baseUrl}/documentsdetails/${tenantId}`);
  }
  public deleteDocument(documentId: number): Observable<void> {
    const url = `${this.baseUrl}/${documentId}`;
    return this.http.delete<void>(url);
  }

  public download(documentId: number): Observable<HttpResponse<Blob>> {
    console.log(documentId);
    const url = this.baseUrl+"/"+3+"/download";
    console.log(documentId);
    return this.http.get(url, { observe: 'response', responseType: 'blob' });
  }
}
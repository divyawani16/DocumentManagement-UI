import { Injectable } from '@angular/core';
import { Document } from './owner-document.model';
import { HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OwnerDocumentService {
  getAllUser() {
    throw new Error('Method not implemented.');
  }
  
  private baseUrl:string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8089/api/documents';
  }

  // public getDocuments(): Observable<Document[]> {
  //   return this.http.get<Document[]>(`${this.baseUrl}/documentsdetails`);
  // }
  public getSmartworksDocuments(propertyName: string): Observable<Document[]> {
    const params = new HttpParams().set('propertyName', propertyName);
    return this.http.get<Document[]>(`${this.baseUrl}/documents/propertyname`, { params });
  }
  
  
  public deleteDocument(documentId: number): Observable<void> {
    const url = `${this.baseUrl}/${documentId}`;
    return this.http.delete<void>(url);
  }
  public download(documentId: number): Observable<HttpResponse<Blob>> {
    console.log(documentId);
    const url = this.baseUrl+"/"+9+"/download";
    console.log(documentId);
    return this.http.get(url, { observe: 'response', responseType: 'blob' });
  }
}

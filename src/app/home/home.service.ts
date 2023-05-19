import { Injectable } from '@angular/core';
import { HttpClient, HttpProgressEvent, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from './home.model';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl:string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8089/api/documents';
  }
  
   public getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.baseUrl}/getalldocumentsdetails`);
  }


  public createDocument(formData: FormData): Observable<any> {
    return this.http.post<any>(this.baseUrl, formData);
  }
  public deleteDocument(documentId: number): Observable<void> {
    const url = `${this.baseUrl}/${documentId}`;
    return this.http.delete<void>(url);
  }
  
}
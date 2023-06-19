import { Injectable } from '@angular/core';
import { HttpClient, HttpProgressEvent, HttpEvent, HttpResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from './home.model';
import { map } from 'rxjs/operators';
//import { backendurl } from '../config';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8089/api/documents';
  }

    public download(documentId: number): Observable<HttpResponse<Blob>> {
      console.log(documentId);
      const url = this.baseUrl+"/"+`${documentId}`+"/download";
      console.log(documentId);
      return this.http.get(url, { observe: 'response', responseType: 'blob' });
    }
  

  public getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.baseUrl}/documentsdetails`);
  }

  public createDocument(formData: FormData): Observable<any> {
    return this.http.post<any>(this.baseUrl, formData);
  }

  public deleteDocument(documentId: number): Observable<void> {
    const url = `${this.baseUrl}/${documentId}`;
    return this.http.delete<void>(url);
  }
  

  public updateDocument(documentId: number, document: Document): Observable<Document> {
    const url = `${this.baseUrl}/${documentId}`;
    return this.http.put<Document>(url, document);
  }
  
  public updateDocumentApproval(documentId: number, approved: boolean): Observable<Document> {
    const url = `${this.baseUrl}/${documentId}/approval?approved=${approved}`;
    return this.http.put<Document>(url, {});
  }
  public getUsernames(): Observable<string[]> {
    const url = 'http://localhost:8089/api/users/usernames';
    return this.http.get<string[]>(url);
  }
  // public updateProperty(propertyId: number, property: Document): Observable<Document> {
  //   const url = `${this.baseUrl}/${propertyId}`;
  //   return this.http.put<Document>(url, property);
  // }
}


  import { Injectable } from '@angular/core';
  import { HttpClient, HttpProgressEvent, HttpEvent, HttpResponse} from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Document } from './home.model';
  @Injectable({
    providedIn: 'root'
  })
  export class HomeService {

    private baseUrl:string;
    httpClient: any;

    constructor(private http: HttpClient) { 
      this.baseUrl = 'http://localhost:8089/api/documents';
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

    public download(documentId: number): Observable<HttpResponse<Blob>> {
      const url = `${this.baseUrl}/${documentId}/download`;
      console.log(documentId);
      return this.http.get(url, { observe: 'response', responseType: 'blob' });
    }
  }

  public updateDocumentApproval(documentId: number, approved: boolean): Observable<Document> {
    const url = `${this.baseUrl}/${documentId}/approval?approved=${approved}`;
    return this.http.put<Document>(url, {});
  }


}


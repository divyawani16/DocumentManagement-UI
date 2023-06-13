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
    this.baseUrl = 'https://localhost:8089/api/documents';
  }

    // public download(documentId: number): Observable<HttpResponse<Blob>> {
    //   const url = `${this.baseUrl}/${documentId}/download`;
    //   console.log(url);
    //   console.log(documentId);
    //   return this.http.get(url, { observe: 'response', responseType: 'blob' });
    // }

    public download(documentId: number): Observable<HttpResponse<Blob>> {
      console.log(documentId);
      const url = this.baseUrl+"/"+9+"/download";
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
  
  // public download(documentId: number): Observable<HttpResponse<Blob>> {
  //   console.log(documentId);
  //   const url = this.baseUrl+"/"+1+"/download";
  //   console.log(documentId);
  //   return this.http.get(url, { observe: 'response', responseType: 'blob' });
  // }
  // public download(): Observable<HttpResponse<Blob>> {
  //   const documentId = 1; // Fixed documentId of 1
  //   return this.http.get(`${this.baseUrl}/${documentId}/download`, { observe: 'response', responseType: 'blob' })
  //     .pipe(
  //       map((response: HttpResponse<Blob>) => {
  //         const contentDispositionHeader = response.headers.get('content-disposition');
  //         const fileNameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
  //         const matches = fileNameRegex.exec(contentDispositionHeader || '');
  //         const fileName = matches != null && matches[1] ? matches[1].replace(/['"]/g, '') : 'file';
  
  //         // Add the document name with extension as a property of the response object
  //         response['documentName'] = fileName;
  
  //         return response;
  //       })
  //     );
  // }
  
  
  
  // public download(documentId: number, filename: string): Observable<HttpResponse<Blob>> {
  //   const url = `${this.baseUrl}/${documentId}/download`;
  //   return this.http.get(url, {
  //     observe: 'response',
  //     responseType: 'blob',
  //     headers: new HttpHeaders().append('Content-Disposition', `attachment; filename=${filename}`)
  //   });
  // }
  

  updateDocument(documentId: string, document: Document): Observable<Document> {
    const url = `${this.baseUrl}/${documentId}`;
    return this.http.put<Document>(url, document);
  }
  
  public updateDocumentApproval(documentId: number, approved: boolean): Observable<Document> {
    const url = `${this.baseUrl}/${documentId}/approval?approved=${approved}`;
    return this.http.put<Document>(url, {});
  }
  public getUsernames(): Observable<string[]> {
    const url = 'https://localhost:8089/api/users/usernames';
    return this.http.get<string[]>(url);
  }
}


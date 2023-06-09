import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from './owner-property.model';
@Injectable({
  providedIn: 'root'
})
export class OwnerPropertyService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8089/api/properties';
  }

  // public getProperty(): Observable<Document[]> {
  //   return this.http.get<Document[]>(`${this.baseUrl}/propertyname);
  // }
  
  public getProperty(): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.baseUrl}/get`);
  }
  public deleteProperty(propertyId: number): Observable<void> {
    const url = `${this.baseUrl}/${propertyId}`;
    return this.http.delete<void>(url);
  }

  public createProperty(property: Document): Observable<Document> {
    return this.http.post<Document>(`${this.baseUrl}/post`, property);
  }
}

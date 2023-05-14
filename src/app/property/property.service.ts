import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from './property.model';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private baseUrl:string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8089/api/properties/get';
  }

   public getProperty(): Observable<Document[]> {
    return this.http.get<Document[]>(this.baseUrl);
  }
}

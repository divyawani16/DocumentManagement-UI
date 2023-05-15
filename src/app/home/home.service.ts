import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from './home.model';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl:string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8089/documents/getalldocumentsdetails';
  }

   public getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(this.baseUrl);
  }
}

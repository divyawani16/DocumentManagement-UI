import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from './owner-user.model';
@Injectable({
  providedIn: 'root'
})
export class OwnerUserService {

  private baseUrl:string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8089/api/users/';
  }

   public getUsers(): Observable<Document[]> {
    return this.http.get<Document[]>(this.baseUrl);
   }
}

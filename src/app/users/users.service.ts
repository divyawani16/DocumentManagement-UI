import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from './users.model';
import { backendurl } from '../config';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl:string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'https://localhost:8089/api/users/';
  }

   public getUsers(): Observable<Document[]> {
    return this.http.get<Document[]>(this.baseUrl);
   }
   public createUsers(users: Document): Observable<Document> {
      return this.http.post<Document>(this.baseUrl, users);
    }
  
  
}

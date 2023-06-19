import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://localhost:8089/api';

  constructor(private http: HttpClient) { }

  getPropertyCount() {
    return this.http.get<number>(`${this.apiUrl}/properties/count`);
  }

  getUserCount() {
    return this.http.get<number>(`${this.apiUrl}/users/count`);
  }
  
  getDocumentCount() {
    return this.http.get<number>(`${this.apiUrl}/documents/count`);
  }
}

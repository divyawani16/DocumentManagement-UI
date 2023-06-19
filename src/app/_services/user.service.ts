import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  PATH_OF_API= "http://localhost:8089";
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor( private httpclient: HttpClient, private userAuthService: UserAuthService) { }

  
  public login(loginData) {
    return this.httpclient.post(this.PATH_OF_API + '/api/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }
  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRole: any = this.userAuthService.getRoles();

    if (userRole != null && userRole) {
      for (let i = 0; i < userRole.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRole[i] === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }

}

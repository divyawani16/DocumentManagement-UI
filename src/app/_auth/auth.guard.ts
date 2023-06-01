import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userAuthservice: UserAuthService, 
    private router: Router, 
    private userService: UserService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      if(this.userAuthservice.getToken() !== null) {
        const role =  route.data["roles"] as Array<string>;
        console.log(role);
         if(role) {
           const match = this.userService.roleMatch(role);
           console.log(match)
          if(match) {
            //this.router.navigateByUrl('/forbidden');
            
          }
          else{
            this.router.navigate(['/forbidden'])
            return false;
          }
         }
      }
      this.router.navigate(['/login'])
      //return false;
  }
  
    }
  

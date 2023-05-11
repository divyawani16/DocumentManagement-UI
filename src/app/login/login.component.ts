
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider,SocialAuthService } from 'angularx-social-login';
//import { an } from '';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']

})
export class LoginComponent {

 constructor(

 // private afAuth: AngularFireAuth,

 private router: Router, private readonly authService: SocialAuthService,
 private httpClient: HttpClient
 ) {

 }

ngOnInit() {
   this.authService.authState.subscribe((user: any) => {
     this.getAccessToken();
console.log('authState user: ', user);
 console.log('Token from state: ', user.authToken)
 });

 }
 private accessToken = '';
 user: any;
 googleClientId = '248604648421-q1rfoqrjds4i5hons2ijmkpqmpmvsj1t.apps.googleusercontent.com';
 getAccessToken(): void {
 console.log('getAccessToken')
 this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken);
 }

}



import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

// import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
// import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  hide = true;
  loginForm: FormGroup;

  constructor(private router: Router,private snackBar: MatSnackBar) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    console.log('LoginComponent constructor called');
  }


  ngOnInit(): void {
//     this.authService.authState.subscribe((user: any) => {
    
//  this.getAccessToken();
  
//       ////add code.
      
//       console.log('authState user: ', user);
      
//     console.log('Token from state: ', user.authToken)
      
//       });
      
//        }
      
//        private accessToken = '';
      
//       user: any;
//        googleClientId = '248604648421-gu3ja2c5e8po1uapmfqo1p2t54tskpkt.apps.googleusercontent.com';
//       getAccessToken(): void {
//       console.log('getAccessToken')
//       this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken);
       
    console.log('LoginComponent ngOnInit');
  }
  
  get usernameFormControl() {
    return this.loginForm.get('username');
  }

  get passwordFormControl() {
    return this.loginForm.get('password');
  }

  login() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

this.snackBar.open('Login Successful!', 'Close', {

duration: 2000,

panelClass: 'success-snackbar' 

});

    // this.router.navigate(['/dashboard']);
    this.router.navigateByUrl('/dashboard');
  }
}


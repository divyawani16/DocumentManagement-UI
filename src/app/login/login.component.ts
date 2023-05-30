import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';

// import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
// import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private userAuthService: UserAuthService ,private router: Router){}
  
  ngOnInit(): void {}

  login(loginForm:NgForm) {
   this.userService.login(loginForm.value).subscribe(
    (response:any)=>{
      // console.log(response.jwtToken);
      // console.log(response.userRoles);

      this.userAuthService.setRoles(response.userRoles);
      this.userAuthService.setToken(response.jwtToken);
      console.log(response);
     const role= response.userRoles[0].roleId;
     if(role ==="Admin"){
     this.router.navigate(['/dashboard']);
     }
     else{
      this.router.navigate(['/owner']);
     }
    },
    (error)=>
    {
      console.log(error);
    }
   );
  }

//   username = '';
//   password = '';
//   hide = true;
//   loginForm: FormGroup;

//   constructor(private router: Router,private snackBar: MatSnackBar) {
//     this.loginForm = new FormGroup({
//       username: new FormControl('', [Validators.required]),
//       password: new FormControl('', [Validators.required])
//     });
//     console.log('LoginComponent constructor called');
//   }


//   ngOnInit(): void {

       
//     console.log('LoginComponent ngOnInit');
//   }
  
//   get usernameFormControl() {
//     return this.loginForm.get('username');
//   }

//   get passwordFormControl() {
//     return this.loginForm.get('password');
//   }

//   login() {
//     const username = this.loginForm.get('username')?.value;
//     const password = this.loginForm.get('password')?.value;

// this.snackBar.open('Login Successful!', 'Close', {

// duration: 2000,

// panelClass: 'success-snackbar' 

// });

//     // this.router.navigate(['/dashboard']);
//     this.router.navigateByUrl('/dashboard');
//   }
}


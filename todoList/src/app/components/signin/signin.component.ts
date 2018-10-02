import { Component, OnInit } from '@angular/core';
//import { AuthService, GoogleLoginProvider } from 'angular-6-social-login-v2';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userDataControl: FormGroup;
  //constructor(private socialAuthService: AuthService, private router: Router) { }
  constructor(private router: Router) { }
  /*public socialSignIn(socialPlatform : string) { 

    let socialPlatformProvider;
    if(socialPlatform == 'google'){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        //console.log(socialPlatform + ' sign in data : ' , userData);
        // Now sign-in with userData
        // ...
        console.log(userData); 
        this.router.navigate(['/tasks']);  
      }
    );

  }*/

  ngOnInit() {
    this.userDataControl = new FormGroup({
      login: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

}

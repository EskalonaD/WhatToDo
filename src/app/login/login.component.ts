import { Component, OnInit } from '@angular/core';

enum loginState {
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  WOLogin = 'WOLogin',
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  protected loginStatus: loginState;

  showSignIn() {
    // console.log(this.loginState)
    console.log(loginState);
    this.loginStatus = loginState.SignIn;
    // console.log(this.loginState)
  }

  showSignUp() {
    this.loginStatus = loginState.SignUp;
  }
  
  showWOLogin() {
    this.loginStatus = loginState.WOLogin;
  }

  ngOnInit() {
  }

}

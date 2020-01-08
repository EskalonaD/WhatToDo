import { Component, OnInit } from '@angular/core';

enum loginState {
  isSignIn = 'isSignIn',
  isSignUp = 'isSignUp',
  isWOLogin = 'isWOLogin',
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  protected loginState: loginState;

  showSignIn() {
    console.log(this.loginState)
    console.log(loginState)
    this.loginState = loginState.isSignIn
    console.log(this.loginState)
  };
  showSignUp() {
    this.loginState = loginState.isSignUp
  };
  showWOLogin() {
    this.loginState = loginState.isWOLogin
  };

  ngOnInit() {
  }

}

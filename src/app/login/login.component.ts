import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

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

  constructor(private store: StoreService) { }
  protected loginStatus: loginState;

  showSignIn(): void {
    // console.log(this.loginState)
    console.log(loginState);
    this.loginStatus = loginState.SignIn;
    this.store.isLogin = true;
    // console.log(this.loginState)
  }

  showSignUp(): void {
    this.loginStatus = loginState.SignUp;
    this.store.isLogin = true;

  }
  
  showWOLogin(): void {
    this.loginStatus = loginState.WOLogin;
    this.store.isLogin = true;

  }

  ngOnInit() {
  }

}

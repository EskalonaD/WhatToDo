import { Component, ViewEncapsulation } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(private store: StoreService){}
  title = 'WhatToDo';
  
  get isLogin() {
    return this.store.isLogin
  }
}

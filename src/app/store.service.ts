import { Injectable } from '@angular/core';

// change to ngrx/mob?????X

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
  isLogin:boolean = false;
}

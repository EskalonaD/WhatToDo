import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as data from "./mock-data/mock-tasks.json";  //remove resolveJsonMofule flag from  tsconfig.json

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor() { }

  getTasks(): Observable<any> {
    console.log(data);
    return of(data)
  }
}

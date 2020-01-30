import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import * as data from "./mock-data/mock-tasks.json";  //remove resolveJsonMofule flag from  tsconfig.json

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor() { }
  data = data;
  getTasks(): Observable<any> {
    console.log(data);
    return of(this.data).pipe(
      map(data => (data as any).default)
    )
  }
}

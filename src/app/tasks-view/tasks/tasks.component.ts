import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as data from "../../mock-data/mock-tasks.json";  //remove resolveJsonMofule flag from  tsconfig.json
import { HttpRequestService } from 'src/app/http-request.service.js';
// import * as test from "../mock-data/test.json";  //remove resolveJsonMofule flag from  tsconfig.json

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {
  @Input() tasks: Observable<string[]>;
  console = console;
  tasks$

  // protected tasksSubscription;
  // tasks

  constructor( private httpRequest: HttpRequestService) { }

  // data: string[] = (<{default: string[]}><unknown>data).default;
  // data: string[] = (<unknown>data as { default: string[] }).default;
  
  // data = data;
  // data1 = data[0];
  // // data1 = data.default;
  // test = test.name;
  

  ngOnInit() {
    this.tasks$ = this.tasks;
    // data:
    // console.log('test');
    // console.log(test);
    // console.log(this.test);
    
    // console.log('data1');
    // console.log(data);
    
    // console.log(this.data1);
    
    // // console.log(data);
    // // console.log(this.data.default);
    // console.log('testing');
    // console.log((<any>data).default);
    // // console.log(data.default);
    

  }

  ngOnDestroy() {
    // if(this.tasksSubscription) {

    //   this.tasksSubscription.unsubscribe()
    // }
  }

}

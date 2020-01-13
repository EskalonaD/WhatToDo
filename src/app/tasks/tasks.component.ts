import { Component, OnInit } from '@angular/core';

import * as data from "../mock-data/mock-tasks.json";  //remove resolveJsonMofule flag from  tsconfig.json
// import * as test from "../mock-data/test.json";  //remove resolveJsonMofule flag from  tsconfig.json

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }

  data: string[] = (<{default: string[]}><unknown>data).default;
  // data = data;
  // data1 = data[0];
  // // data1 = data.default;
  // test = test.name;
  
  ngOnInit() {
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

}

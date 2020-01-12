import { Component, OnInit } from '@angular/core';

import * as data from "../mock-data/mock-tasks.json";  //remove resolveJsonMofule flag from  tsconfig.json

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }

  data: any = data;
  
  ngOnInit() {
    console.log(this.data.default);

  }

}

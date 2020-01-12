import { Component, OnInit } from '@angular/core';

import * as data from '../../mock-data/mock-tasks.json'

@Component({
  selector: 'app-ordinary-tasks',
  templateUrl: './ordinary-tasks.component.html',
  styleUrls: ['./ordinary-tasks.component.css']
})
export class OrdinaryTasksComponent implements OnInit {

  constructor() { }

  data: string[] = (<any>data).default;
  ngOnInit() {
  }

}

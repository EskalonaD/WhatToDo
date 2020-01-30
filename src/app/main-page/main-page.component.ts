import { Component, OnInit } from '@angular/core';
import { take, map } from 'rxjs/operators'
import { HttpRequestService } from '../http-request.service';

// import * as data from "../mock-data/mock-tasks.json";  //remove resolveJsonMofule flag from  tsconfig.json

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private httpRequest: HttpRequestService) { }
  console = console;
  isTaskShown: boolean;
  tasks$ = this.httpRequest.getTasks().pipe(
      // take(1),
      map(data => data.default)
    );
  

  showTask(): void {
    this.isTaskShown = true;
  }
  ngOnInit() { }

}

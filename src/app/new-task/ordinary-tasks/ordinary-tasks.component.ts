import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpRequestService } from 'src/app/http-request.service';
import { take, map } from 'rxjs/operators';


@Component({
  selector: 'app-ordinary-tasks',
  templateUrl: './ordinary-tasks.component.html',
  styleUrls: ['./ordinary-tasks.component.css']
})
export class OrdinaryTasksComponent implements OnInit, OnDestroy {

  
  constructor( private httpRequest: HttpRequestService) { }

    console = console;
    
    tasks$ = this.httpRequest.getTasks().pipe(
      // take(1),
      map(data => data.default
        // .default
        )
    );


  


  ngOnInit() {
  }

  ngOnDestroy() {
    console.log(this.tasks$)
  }

}

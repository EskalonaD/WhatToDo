import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {
  @Input() tasks$: Observable<string[]>;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}

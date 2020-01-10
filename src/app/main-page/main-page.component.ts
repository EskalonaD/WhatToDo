import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  isTaskShown: boolean;
  showTask(): void {
    this.isTaskShown = true;
  }
  ngOnInit() {
  }

}

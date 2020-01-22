import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.css']
})
export class NavigationButtonsComponent implements OnInit {    // move to AppComponent

  constructor(private location: Location, private router: Router) { }

  goToMainPage(): void {
    this.router.navigate(['/main']);
  }

  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
  }

}

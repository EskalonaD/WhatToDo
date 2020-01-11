import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.css']
})
export class NavigationButtonsComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }

  goToMainPage() {
    this.router.navigate(['/main']);
  }

  goBack() {
    this.location.back();
  }
  ngOnInit() {
  }

}

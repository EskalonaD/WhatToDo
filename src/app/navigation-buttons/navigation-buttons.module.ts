import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationButtonsComponent } from './navigation-buttons.component';



@NgModule({
  declarations: [NavigationButtonsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationButtonsComponent
  ]
})
export class NavigationButtonsModule { }

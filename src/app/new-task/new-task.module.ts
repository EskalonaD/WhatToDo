import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { OrdinaryTasksComponent } from './ordinary-tasks/ordinary-tasks.component';
import { NewTaskRoutingModule } from './new-task-routing.module';
// import { HeaderComponent } from '../header/header.component';
// import {NavigationButtonsComponent} from '../navigation-buttons/navigation-buttons.component'

import {NavigationButtonsModule} from '../navigation-buttons/navigation-buttons.module'

//change name to Ordinary tasks



@NgModule({
  declarations: [
    AddTaskComponent,
    OrdinaryTasksComponent,
    // NavigationButtonsComponent
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    NewTaskRoutingModule,
    NavigationButtonsModule
  ]
})
export class NewTaskModule { }

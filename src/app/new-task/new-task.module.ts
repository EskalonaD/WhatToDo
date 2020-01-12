import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { OrdinaryTasksComponent } from './ordinary-tasks/ordinary-tasks.component';
import { NewTaskRoutingModule } from './new-task-routing.module';
// import { HeaderComponent } from '../header/header.component';


//change name to Ordinary tasks



@NgModule({
  declarations: [
    AddTaskComponent,
    OrdinaryTasksComponent,
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    NewTaskRoutingModule
  ]
})
export class NewTaskModule { }

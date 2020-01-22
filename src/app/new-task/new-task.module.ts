import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { OrdinaryTasksComponent } from './ordinary-tasks/ordinary-tasks.component';
import { NewTaskRoutingModule } from './new-task-routing.module';

import {NavigationButtonsModule} from '../navigation-buttons/navigation-buttons.module'
import { TasksViewModule } from '../tasks-view/tasks-view.module';

//change name to Ordinary tasks


@NgModule({
  declarations: [
    AddTaskComponent,
    OrdinaryTasksComponent,
  ],
  imports: [
    CommonModule,
    NewTaskRoutingModule,
    NavigationButtonsModule,
    TasksViewModule
  ]
})
export class NewTaskModule { }

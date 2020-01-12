import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdinaryTasksComponent } from './ordinary-tasks/ordinary-tasks.component';


const routes: Routes = [
  // {path: 'manage-tasks/ordinary-tasks', component: OrdinaryTasksComponent}
  {path: 'ordinary-tasks', component: OrdinaryTasksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewTaskRoutingModule { }

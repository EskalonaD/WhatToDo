import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdinaryTasksComponent } from './ordinary-tasks/ordinary-tasks.component';


const routes: Routes = [
  { path: '', component: OrdinaryTasksComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewTaskRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TasksComponent } from './tasks/tasks.component';
import { ManageTasksComponent } from './manage-tasks/manage-tasks.component';
import { OrdinaryTasksComponent } from './new-task/ordinary-tasks/ordinary-tasks.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { 
    path: 'main/manage-tasks',
    component: ManageTasksComponent, 
  },
  { 
    path: 'main/manage-tasks',
    children: [
      { path: 'ordinary-tasks', component: OrdinaryTasksComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

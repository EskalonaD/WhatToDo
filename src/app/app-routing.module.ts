import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ManageTasksComponent } from './manage-tasks/manage-tasks.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { 
    path: 'main/manage-tasks', component: ManageTasksComponent },
  { 
    path: 'main/manage-tasks',
    children: [
      { path: 'ordinary-tasks',
        loadChildren: './new-task/new-task.module#NewTaskModule'
      },
      { path: 'future-tasks',
        loadChildren: () => import('./new-task/new-task.module').then(module => module.NewTaskModule)
      },
      { path: 'routine',
        loadChildren: () => import('./new-task/new-task.module').then(module => module.NewTaskModule)
      },
      { path: 'circular-tasks',
        loadChildren: () => import('./new-task/new-task.module').then(module => module.NewTaskModule)
      },
      { path: 'compaund-tasks',
        loadChildren: () => import('./new-task/new-task.module').then(module => module.NewTaskModule)
      },
      { path: 'someday-tasks',
        loadChildren: () => import('./new-task/new-task.module').then(module => module.NewTaskModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

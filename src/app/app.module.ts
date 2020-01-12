import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { ManageTasksComponent } from './manage-tasks/manage-tasks.component';
// import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';

import {NewTaskModule } from './new-task/new-task.module';
import {NavigationButtonsModule} from './navigation-buttons/navigation-buttons.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    HeaderComponent,
    TasksComponent,
    ManageTasksComponent,
    // NavigationButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewTaskModule,
    NavigationButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { ManageTasksComponent } from './manage-tasks/manage-tasks.component';

import {NavigationButtonsModule} from './navigation-buttons/navigation-buttons.module';
import {TasksViewModule } from './tasks-view/tasks-view.module';
import { StoreService } from './store.service';
import { HttpRequestService } from './http-request.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    HeaderComponent,
    ManageTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationButtonsModule,
    TasksViewModule,
  ],
  providers: [
    StoreService,
    HttpRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatCheckboxModule,
  MatCardModule,
  MAT_CHECKBOX_CLICK_ACTION,
  MatListModule
} from "@angular/material";
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatButtonModule, 
    MatSelectModule, 
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule 
    
  ],
  providers: [{provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}],
  bootstrap: [AppComponent, TaskListComponent]
})
export class AppModule { }

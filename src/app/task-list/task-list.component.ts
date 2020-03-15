import { Component, Input } from "@angular/core";
import {  MatSelectionListChange } from '@angular/material/list';


@Component({
  selector: "my-task-list",
  templateUrl: "task-list.component.html",
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks: string[] = [];
  isChecked: boolean =  false;
  selectedOptions=[];
  selectedOption: any;

  addTask = (task: string) => { 
    this.tasks.push(task);
  }

  onNgModelChange($event: any){
    this.selectedOption = $event;
    
  }
}

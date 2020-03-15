import { Component, Input } from "@angular/core";
import {  MatSelectionListChange } from '@angular/material/list';


@Component({
  selector: "my-task-list",
  templateUrl: "task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent {
  tasks: string[] = [];
  isChecked: boolean = false;
  selectedOptions = [];
  selectedOption: any;
  valueSelected: string;

  addTask = (task: string) => {
    this.tasks.push(task);
  };

  onItemChange = (task, isChecked: boolean) => {
    this.selectedOption = task;
    this.isChecked = !isChecked;
  };
}

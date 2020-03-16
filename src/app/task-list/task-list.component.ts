import { Component } from "@angular/core";

@Component({
  selector: "my-task-list",
  templateUrl: "task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent {
  tasks: any[] = [];

  addTask = (name: string) => {
    this.tasks.push({ name, isChecked: false });
  };

  onItemChange = (updatedTask: any) => {
    this.tasks.map(task => {
      if (task.name === updatedTask.name) {
        if (updatedTask.isChecked) {
          updatedTask.isChecked = false;
        } else {
          updatedTask.isChecked = true;
        }
        return { ...updatedTask };
      } else {
        return task;
      }
    });
  };
}
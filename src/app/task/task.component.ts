import { Component, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'my-task',
    templateUrl: 'task.component.html',
    styleUrls: ['./task.component.css']

})

export class TaskComponent { 

  @Output() exampleOutput: any = new EventEmitter<string>();

  isHidden: boolean = true;

  addTask(newTask: string) {
    debugger
    if (newTask) {
      this.exampleOutput.emit(newTask);
      this.isHidden =  true;
    }
  }

  showInput() {
    this.isHidden = false;
  } 
}


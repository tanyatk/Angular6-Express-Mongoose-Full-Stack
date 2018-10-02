import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css'],
  providers: [ TaskService ]
})
export class TaskEditComponent implements OnInit {

  userTaskControl: FormGroup;
  task = new Task();
  taskId: string;
  message: string;
  isUpdate = false;

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userTaskControl = new FormGroup({
      title: new FormControl(),
      text: new FormControl()
    });

    this.taskId = this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(this.taskId)
      .subscribe(task => this.task = task);
  }

  update(): void {
    let taskObj = {};
    for (let val in this.userTaskControl.value) {
      if(this.userTaskControl.value[val] != null) {
        taskObj[val] = this.userTaskControl.value[val]
      }
    }
    this.taskService.updateTask(this.taskId, taskObj)
        .subscribe(result => this.message = 'Таск успешно изменен!');
    this.isUpdate = true;
  }

}

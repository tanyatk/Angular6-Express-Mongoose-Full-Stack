import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css'],
  providers: [ TaskService ]
})

export class TaskCreateComponent implements OnInit {
  userTaskControl: FormGroup;
 
  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.userTaskControl = new FormGroup({
      title: new FormControl(),
      text: new FormControl()
    });
  }

  addTask(): void{
    let taskObj = {
      'title': this.userTaskControl.value.title,
      'text': this.userTaskControl.value.text
    }
    this.taskService.createTask(taskObj);
  }

}

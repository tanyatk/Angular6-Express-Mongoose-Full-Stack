import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  providers: [ TaskService ]
})
export class TaskDetailComponent implements OnInit {

  task = new Task();
  message: string;
  isEmpty = false;
  taskId: string;

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(this.taskId)
      .subscribe(task => this.task = task);
  }

  deleteTask(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.taskService.deleteTask(this.taskId)
    .subscribe(result => this.message = 'Таск успешно удален!');
    this.isEmpty = true;
  }

}

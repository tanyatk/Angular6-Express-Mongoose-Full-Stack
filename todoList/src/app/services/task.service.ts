import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Task } from '../models/task';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

interface createTaskResponse {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  createTask(task: Task){
    return this.http.post<createTaskResponse>(this.apiUrl + 'tasks/create', task).subscribe(data=>console.log(data));
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl + 'tasks');
  }

  getTask(id: string): Observable<Task> {
    const url = `${this.apiUrl}tasks/${id}`;
    return this.http.get<Task>(url);
  }

  deleteTask (id: string): Observable<Task> {
    const url = `${this.apiUrl}tasks/delete/${id}`;
    return this.http.delete<Task>(url, httpOptions);
  }

  updateTask(id: string, task: Task): Observable<any> {
    const url = `${this.apiUrl}tasks/update/${id}`;
    return this.http.put(url, task, httpOptions);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../components/signin/signin.component';
import { IntroComponent } from '../components/intro/intro.component';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { TaskDetailComponent } from '../components/task-detail/task-detail.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { TaskEditComponent } from '../components/task-edit/task-edit.component';
import { TaskCreateComponent } from '../components/task-create/task-create.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/detail/:id', component: TaskDetailComponent },
  { path: 'tasks/create', component: TaskCreateComponent },
  { path: 'tasks/edit/:id', component: TaskEditComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

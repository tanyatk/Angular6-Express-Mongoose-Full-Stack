import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angular-6-social-login-v2";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PagerComponent } from './components/pager/pager.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { MatPaginatorModule, MatIconModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { IntroComponent } from './components/intro/intro.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig (
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('946970260068-v31am1aoq67csnndh8cf5u2p3p4166d2.apps.googleusercontent.com')
        }
      ]
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    PagerComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskEditComponent,
    TaskCreateComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatPaginatorModule,
    SocialLoginModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

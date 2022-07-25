import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'post', component: PostsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    AccountComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

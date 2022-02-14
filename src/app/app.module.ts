import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { HomeComponent } from './home/home.component';
import { DatePipe } from './date.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    UserProfileComponent,
    GithubReposComponent,
    HomeComponent,
    DatePipe,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

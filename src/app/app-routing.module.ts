import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { HomeComponent } from './home/home.component';


// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', pathMatch: 'full', redirectTo: 'home'},
  {path:"home", component:HomeComponent},
  // {path:'home' , component : HomeComponent},
  {path :'user-profile' , component : UserProfileComponent},
  {path : 'github-repos' , component : GithubReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GithubReposComponent } from './github-repos/github-repos.component';

const routes: Routes = [
  {path :'user-profile' , component : UserProfileComponent},
  {path : 'github-repos' , component : GithubReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

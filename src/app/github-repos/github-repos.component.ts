import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {


  public githubUserQuery:string | any;
  public githubRepos!: any[];

  constructor(private httpService:HttpServiceService) { }


  public searchRepos(){
     //fetching github repos
      this.httpService.getRepos(this.githubUserQuery).subscribe((data) => {
        this.githubRepos = data;
      });
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import{faGithub} from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

faGithub = faGithub ; 

public githubUserQuery:string | any;
public githubData:any;
  public githubRepos!: any[];

  users:string[] | any;
  

  constructor(private httpService:HttpServiceService) { }


  // fetching github profile
  public searchUser(){
    
      this.httpService.getData(this.githubUserQuery).subscribe((data) => {
        this.githubData = data;
      });

     // fetching github repos
      this.httpService.getRepos(this.githubUserQuery).subscribe((data) => {
        this.githubRepos = data;
      });

      
  }

  ngOnInit(): void {

  }

}

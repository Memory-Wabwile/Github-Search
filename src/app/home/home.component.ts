import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public fetchData:any;
  public fetchRepos :any;

  constructor(private homeservice:HomeService) { }

  ngOnInit(): void {
    this.homeservice.fetchData().subscribe((data) => {
      this.fetchData = data;
    });

   // fetching github repos
    this.homeservice.fetchRepos().subscribe((data) => {
      this.fetchRepos = data;
    });
  }

}

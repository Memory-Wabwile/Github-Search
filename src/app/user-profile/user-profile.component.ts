import { Component, Input, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Repos } from '../repos';
import { User } from '../user';
// import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  @Input() githubData:any;
  @Input() githubRepos: any[] = [];
  // githubRepos: any[] = [];
  // @Input () repos :any;
  // @Input () repos :any;
  repos!: Repos | any[]; 

 constructor(){ }


 
  ngOnInit(): void {


  }


}


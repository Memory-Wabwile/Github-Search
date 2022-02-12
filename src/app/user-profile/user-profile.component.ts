import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
// import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  @Input() githubData:any;

 constructor(){ }

  ngOnInit(): void {


  }


}


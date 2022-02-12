import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  users:string[] | any;

  constructor(private httpService:HttpServiceService) { }

  ngOnInit(): void {

    getUsers();{
      this.httpService.getData().subscribe((data) => {
        
      })
    }
  }

}
function getUsers() {
  throw new Error('Function not implemented.');
}


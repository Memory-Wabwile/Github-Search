import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Repos } from './repos';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  users:string[] | any;
  // repos:Repos |any;

  constructor(private http:HttpClient) { }

  //getProfile using an observable
 public  getData(searchQuery:any):Observable<any>
{

  let url = `https://api.github.com/users/${searchQuery}?token=${environment } `

  return this.http.get<any>(url)

 
}


// get repos using a promise
public  getRepos(searchQuery:any):Observable<any[]>
{

  let repoUrl = `https://api.github.com/users/${searchQuery}/repos?token=${environment } `

  return this.http.get<any[]>(repoUrl)
}

}



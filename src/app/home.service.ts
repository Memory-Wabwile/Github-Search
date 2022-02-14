import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry} from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {


  users:string[] | any;
  constructor(private http:HttpClient) { }

  public fetchData():Observable<any>
{
  let fetchurl = `https://api.github.com/users/Memory-Wabwile?token=${environment} `
  return this.http.get<any>(fetchurl)
}

public fetchRepos():Observable<any>
{
  let fetchhurl = `https://api.github.com/users/Memory-Wabwile/repos?token=${environment} `
  return this.http.get<any>(fetchhurl)
}
}

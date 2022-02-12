import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  users:string[] | any;

  constructor(private http:HttpClient) { }

  getData():Observable<any>
{

  const url = ""

  return this.http.get<any>(url)
}
}

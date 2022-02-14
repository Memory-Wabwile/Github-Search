// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { Repos } from './repos';

// @Injectable({
//   providedIn: 'root'
// })
// export class ReposService {
//   repos:Repos |any;

//   constructor() { }
//   this.repos = new Repos ("" , "" , "" ,"" , "");


// function fetchRepos (){
//   interface ApiResponse {
//       name = string ;
//       full_name = string;
//       description = string;
//       created_at = string ;
//       html_url = string;
//   }
//   let promise = new Promise ((resolve , reject) =>{
//     this.http.get<any><ApiResponse>(environment.accessKey).toPromise().then(response =>{
//       this.repos.name = response.name
//       this.repos.full_name = response.full_name
//       this.repos.description = response.description
//       this.repos.created_at = response.created_at
//       this.repos.html_url = response.html_url

//       resolve()
//     })
//   })


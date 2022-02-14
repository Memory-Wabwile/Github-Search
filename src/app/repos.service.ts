import { Injectable } from '@angular/core';
import { Repos } from './repos';

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  repos:Repos |any;

  constructor() { }
  this.repos = new Repos ("" , "" , "" ,"" , "");


function fetchRepos (){
  interface ApiResponse {
      name = string ;
      full_name = string;
      description = string;
      created_at = string ;
      html_url = string;
  }
  let promise = new Promise ((resolve , reject) =>{

  })


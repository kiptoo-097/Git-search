import { Injectable } from '@angular/core';
import { Users } from './users'
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
import { Repositories } from './repositories'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {
  user: Users
  repositories: Repositories

  constructor(public http: HttpClient) {
    this.user = new Users('','','',0,0,new Date,0,'',0);
    this.repositories = new Repositories('', '', '','', 0,0, 0);
  }
  searchUsers(term:string){
    interface ApiResponse {
        avatar_url: any,
        login:any,
        location: any,
        followers: any,
        following: any,
        created_at: Date,
        public_repos: number,
        html_url: any,
        public_gists: any,
    }
    let searchPoint = 'https://api.github.com/users/' + term + '?access_token=' + environment.apiKey;
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(searchPoint).toPromise().then(
        (results) => {
          this.user = results;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    return promise;
  }
  getRepos(term) {
    interface ApiResponse {
      name: string,
      html_url: string,
      description: string,
      created_at: string,
      stargazers_count: number,
      watchers_count: number,
      forks:number,
    }
    let searchPoint = 'https://api.github.com/users/' + term + '/repos?access_token=' + environment.apiKey;
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(searchPoint).toPromise().then(
        (repoResults) => {
          this.repositories = repoResults;
          console.log(repoResults);
          
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    return promise;
  }

}

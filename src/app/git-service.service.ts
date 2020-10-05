import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class GitServiceService {
  private username = 'kiptoo-097';
  private client_id = 'c9ed5b82ae24528d67ea';
  private client_secret = '251f6ae74883dc3083e9d239c19c5239ff8a4aba';


  constructor( private http: HttpClient) {
    console.log("Github service started");
   }
   getUser(username) {
    return this.http.get(
      "https://api.github.com/users/" +
      this.username +
      "?client_id=" +
      this.client_id +
      "&client_secret=" +
      this.client_secret
    );
  }
  getRepos(username) {
    return this.http.get(
      "https://api.github.com/users/" +
      this.username +
      "/repos" +
      "?client_id=" +
      this.client_id +
      "&client_secret=" +
      this.client_secret
    );
  }
  updateUsername(username: any) {
    this.username = username;
  }
  //  getUser(username){
  //   return this.http.get('https://api.github.com/users/' + username + '?access_token=9577a25158b0d8a520f6569238d45f44515c9827');
  //  }


  //  getRepos(username) {
  //   return this.http.get('https://api.github.com/users/' + username+ '/repos?access_token=9577a25158b0d8a520f6569238d45f44515c9827');
  // }


}

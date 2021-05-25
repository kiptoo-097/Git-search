import { Component, OnInit } from '@angular/core';
import {GitsearchService } from '../git-service.service'
import { Users } from '../users';
import { Repositories} from '../repositories';

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.css']
})
export class GitHubComponent implements OnInit {

  user: Users;
  repositories: Repositories;
   

  constructor( public gitSearch: GitsearchService) { }
  searchUsers(term) {
    this.gitSearch.searchUsers(term).then(
      (success) => {
        this.user = this.gitSearch.user;
      },
      (error) => {
        console.log(error);
      }
    );
    this.gitSearch.getRepos(term).then(
      (success) => {
        this.repositories = this.gitSearch.repositories;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.searchUsers('kiptoo-097');
  }
}

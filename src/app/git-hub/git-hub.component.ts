import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service';

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.css']
})
export class GitHubComponent implements OnInit {

  user: any[]=[];
  repos: any[]=[];
  username: any[]=[];
  

  constructor( private gitSearch: GitServiceService) { }

  ngOnInit(): void {
    this.gitSearch.getRepos(this.username).subscribe ((repos:any)=>{
      this.repos = repos;
      console.log(repos);
      
    });
    this.gitSearch.getUser(this.username).subscribe((user:any) =>{
      this.user = user;
      console.log(user);
    });
  }
    search() {
      this.gitSearch.updateUsername(this.username);
   
  
      this.gitSearch.getUser(this.username).subscribe((user:any) =>{
        this.user = user;
        console.log(user);
      });
      this.gitSearch.getRepos(this.username).subscribe ((repos:any)=>{
        this.repos = repos;
        console.log(repos);
      });
    
  }

}

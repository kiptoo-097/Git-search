import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
  user:string;
  repo:string;
  username:string;

  constructor() { }

  ngOnInit(): void {
  }

}

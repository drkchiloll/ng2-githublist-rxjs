import { Component, OnInit } from '@angular/core';
import { GithubUserService } from './githubuser.service';
import { GithubUser } from './githubuser.model';

@Component({
  selector: 'user-list',
  providers: [GithubUserService],
  styleUrls: ['app/users/userlist.component.css'],
  template: (
    `
      <div>User List Goes Here</div>
      <ul>
        <li *ngFor='let user of users'>
          <img [src]='user.avatar' />
          <a [href]='user.username'>{{ user.login }}</a>
          <a href='#' class='btn btn-link'> x </a>
        </li>
      </ul>
    `
  )
})

export class UserList implements OnInit {
  users: GithubUser[];
  viewUsers: number = 3;
  errorMessage: string;

  constructor(private _twtrUserService: GithubUserService) {}

  ngOnInit(): void {
    this._twtrUserService.getUsers()
      .subscribe(
        users => this.users = users,
        error => this.errorMessage = <any>error
      );
  }
}

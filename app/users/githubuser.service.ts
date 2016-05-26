import { Injectable } from '@angular/core';
import { GithubUser } from './githubuser.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubUserService {
  private _githubUrl: string = 'https://api.github.com/users';

  constructor(private _http: Http) {}

  getUsers(): Observable<GithubUser[]> {
    return this._http.get(this._githubUrl)
      .map((response: Response) => this._filterResp(response.json()))
      .do(data => console.log(JSON.stringify(data)))
      .catch(this._handleError);
  }

  private _filterResp(githubUsers): GithubUser[] {
    return githubUsers.map(user => {
      return {
        username: user['html_url'],
        login: user['login'],
        avatar: user['avatar_url']
      };
    })
  }

  _handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server Error');
  }
}

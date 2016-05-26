import { Component } from '@angular/core';
import { UserList } from './users/userlist.component';

@Component({
  selector: 'app',
  styleUrls: ['app/app.component.css'],
  directives: [UserList],
  template: (
    `
      <div class='col-sm-offset-2 col-sm-8'>
        <div class='panel panel-default'>
          <div class='panel-heading'>
            <h3 class='header'>Who to following</h3>
            <a href='#' class='refresh btn btn-link'>Refresh</a>
          </div>
          <user-list></user-list>
        </div>
      </div>
    `
  )
})

export class AppComponent {}

import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initUsers();
  }

  initUsers() {
    this.users = [
      new User(1, 'User-1', 'U1'),
      new User(2, 'User-2', 'U2'),
      new User(3, 'User-3', 'U3'),
      new User(4, 'User-4', 'U4'),
      new User(5, 'User-5', 'U5')
    ];
  }
}

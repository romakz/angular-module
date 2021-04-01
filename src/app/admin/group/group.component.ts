import { Component, OnInit } from '@angular/core';
import {Group} from '../../models/group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  groups: Group[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initGroups();
  }

  initGroups() {
    this.groups = [
      new Group(1, 'Group #1', [1, 2, 3]),
      new Group(2, 'Group #2', [4, 5]),
      new Group(3, 'Group #3', [1, 3, 4]),
    ];
  }
}

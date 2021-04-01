import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';

const adminRoutes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'users', component: UserComponent
  },
  {
    path: 'groups', component: GroupComponent
  }
];

@NgModule({
  declarations: [
    UserComponent,
    GroupComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }

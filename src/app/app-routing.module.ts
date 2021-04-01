import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminModule} from './admin/admin.module';


const routes: Routes = [
  {
    path: 'dashboard', loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: '', redirectTo: './dashboard', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    AdminModule
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'userdetail', component: UserDetailComponent },
  { path: 'error', component: ErrorComponent},
  { path: '*', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

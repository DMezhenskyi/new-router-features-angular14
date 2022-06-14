import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UsersContainerComponent } from './users-container/users-container.component';

const routes: Routes = [
  { path: '', component: UsersContainerComponent },
  { path: ':id', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

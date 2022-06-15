import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersContainerComponent } from './users-container/users-container.component';
import { UserComponent } from './user/user.component';
import { MatButtonModule } from '@angular/material/button';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    UsersContainerComponent,
    UserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatButtonModule
  ],
  exports: [UserListComponent]
})
export class UsersModule { }

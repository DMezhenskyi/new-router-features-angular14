import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersContainerComponent } from './users-container/users-container.component';
import { UserComponent } from './user/user.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    UsersContainerComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatButtonModule
  ]
})
export class UsersModule { }

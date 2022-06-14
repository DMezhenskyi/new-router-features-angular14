import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoaderService } from '../user-loader.service';
import { User } from './users.model';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements OnInit {
  users$!: Observable<User[]>;
  constructor(private usersLoader: UserLoaderService) { }

  ngOnInit(): void {
    this.users$ = this.usersLoader.loadUsers();
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoaderService } from '../user-loader.service';
import { User } from '../users-container/users.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Output()
  detailsClicked = new EventEmitter<string | number>();

  users$!: Observable<User[]>;
  constructor(private usersLoader: UserLoaderService) { }

  ngOnInit(): void {
    this.users$ = this.usersLoader.loadUsers();
  }

  onClick(user: User) {
    this.detailsClicked.emit(user.id);
  }

}

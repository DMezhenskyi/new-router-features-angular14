import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck, switchMap } from 'rxjs';
import { UserLoaderService } from '../user-loader.service';
import { User } from '../users-container/users.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$!: Observable<User>;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private userLoader: UserLoaderService
  ) { }

  ngOnInit(): void {
    this.user$ = this.activatedRoute.params.pipe(
      pluck('id'),
      switchMap(id => this.userLoader.loadUser(id))
    );
  }

}

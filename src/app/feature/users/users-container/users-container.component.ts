import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  onDetailsClick(userId: string | number) {
    this.router.navigate(['users', userId])
  }

}

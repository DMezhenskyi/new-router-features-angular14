import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from '../users/users.module';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, UsersModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

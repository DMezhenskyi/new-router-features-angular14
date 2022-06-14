import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './users-container/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserLoaderService {

  constructor(private http: HttpClient) { }

  loadUsers() {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  loadUser(id: number | string) {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  } 
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserLoader } from './user-loader';
import { User } from './users-container/users.model';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalUserLoaderService implements UserLoader {

  constructor() { }
  loadUsers(): Observable<User[]> {
    return of([
      { id: 0, name: 'Dummy', username: 'dummy004', email: 'dummy@dummy.com' }
    ])
  }
  loadUser(id: string | number): Observable<User> {
    return of({ id: 0, name: 'Dummy', username: 'dummy004', email: 'dummy@dummy.com' })
  }
}

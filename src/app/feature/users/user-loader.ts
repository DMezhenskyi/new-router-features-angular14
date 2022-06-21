import { Observable } from "rxjs";
import { User } from "./users-container/users.model";

export interface UserLoader {
  loadUsers(): Observable<User[]>;
  loadUser(id: string | number): Observable<User>;
}
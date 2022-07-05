import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, pluck } from 'rxjs';
import { UserLoaderService } from './user-loader.service';

@Injectable({
  providedIn: 'root'
})
export class UserTitleResolverService implements Resolve<string> {

  constructor(private userLoader: UserLoaderService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string | Observable<string> | Promise<string> {
    return this.userLoader.loadUser(route.paramMap.get('id')!).pipe(
      pluck('name'),
      map(name => `User - ${name}`)
    )
  }
}

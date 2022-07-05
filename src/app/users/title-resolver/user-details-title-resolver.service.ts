import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of, pluck } from 'rxjs';
import { UsersHttpService } from '../common/users-http.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsTitleResolverService implements Resolve<string> {

  constructor(private readonly usersService: UsersHttpService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string | Observable<string> | Promise<string> {
    if(!route.paramMap.get('userId')) {
      return 'User Details';
    }
    return this.usersService.getUserDetails(route.paramMap.get('userId')!).pipe(
      pluck('name'),
      map(name => `${name} - Details`)
    )
  }
}

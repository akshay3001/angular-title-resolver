import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { User } from './users.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersHttpService {
  private readonly API_ROOT = 'https://jsonplaceholder.typicode.com';

  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_ROOT}/users`);
  }

  getUserDetails(userId: string): Observable<User> {
    return this.http
      .get<User>(`${this.API_ROOT}/users/${userId}`)
      .pipe(shareReplay(1));
  }
}

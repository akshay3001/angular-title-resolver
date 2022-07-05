import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { pluck, switchMap } from 'rxjs';
import { UsersHttpService } from '../common/users-http.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  selectedUserDetails$ = this.route.params.pipe(
    pluck('userId'),
    switchMap(id => this.usersService.getUserDetails(id))
  );
  constructor(
    private readonly route: ActivatedRoute,
    private readonly usersService: UsersHttpService
  ) {}

}

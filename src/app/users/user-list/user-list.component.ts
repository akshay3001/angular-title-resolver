import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { UsersHttpService } from '../common/users-http.service';

@Component({
  imports: [CommonModule, MatCardModule],
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users$ = this.usersService.getUsers();

  constructor(private readonly usersService: UsersHttpService) { }

}

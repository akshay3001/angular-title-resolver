import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsTitleResolverService } from './title-resolver/user-details-title-resolver.service';
import { UserContainerComponent } from './user-container/user-container.component';

const routes: Routes = [
  {
    path: '',
    component: UserContainerComponent,
    children: [
      {
        path: '',
        title: 'Users List',
        loadComponent: () =>
          import('./user-list/user-list.component').then(
            (c) => c.UserListComponent
          ),
      },
      {
        path: ':userId',
        title: UserDetailsTitleResolverService,
        loadComponent: () =>
          import('./user-details/user-details.component').then(
            (c) => c.UserDetailsComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

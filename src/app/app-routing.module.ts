import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './feature/home/home-container/home-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    title: 'Home'
  },
  {
    path: 'users',
    loadChildren: () => import('./feature/users/users.module').then(m => m.UsersModule),
    title: 'Users'
  },
  {
    path: 'admin',
    loadComponent: () => import('./feature/admin/admin.component').then(c => c.AdminComponent),
    title: 'Admin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

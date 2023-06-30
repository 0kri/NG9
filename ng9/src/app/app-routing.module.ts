import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersPageComponent } from './pages/members-page/members-page.component';
import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { HobbysPageComponent } from './pages/hobbys-page/hobbys-page.component';
import { MembersDetailsPageComponent } from './pages/members-details-page/members-details-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginPageComponent } from './pages/auth-page/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth-page/register-page/register-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ListsListPageComponent } from './pages/lists-list-page/lists-list-page.component';
import { authGuard } from './guards/auth.guard';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
 
const routes: Routes = [
  { path: 'members', component: MembersPageComponent, title: 'Members' },
  { path: 'lists', component: ListsPageComponent, title: 'Lists' },
  { path: 'lists/:id', component: ListsListPageComponent, title: 'Lists list' },

  { path: 'hobbys', component: HobbysPageComponent, title: 'Hobbys' },
  { path: 'details/:id', component: MembersDetailsPageComponent, title: 'Member Details' },
  {
    path: 'auth', component: AuthPageComponent, title: 'Authorization',
    canActivate: [authGuard],
    children: [
      { path: 'login', component: LoginPageComponent, title: 'Login' },
      { path: 'register', component: RegisterPageComponent, title: 'register'}
    ]
  },
  { path: 'profile', component: ProfilePageComponent, title: 'Your Profile'},
  { path: '**', component: NotFoundPageComponent, title: 'Not Found Page 404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersPageComponent } from './pages/members-page/members-page.component';
import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { HobbysPageComponent } from './pages/hobbys-page/hobbys-page.component';
import { MembersDetailsPageComponent } from './pages/members-details-page/members-details-page.component';

const routes: Routes = [
  { path: 'members', component: MembersPageComponent, title: 'Members' },
  { path: 'lists', component: ListsPageComponent, title: 'Lists' },
  { path: 'hobbys', component: HobbysPageComponent, title: 'Hobbys' },
  { path: 'details/:id', component: MembersDetailsPageComponent, title: 'Member Details'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

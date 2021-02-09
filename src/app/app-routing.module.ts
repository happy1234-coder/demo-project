import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetUserComponent } from './get-user/get-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'CreateUsers', component: NavbarComponent },
  { path: 'updateUsers/:item', component: UpdateUserComponent },
  { path: 'deleteUser', component: NavbarComponent },
  { path: 'getUsers', component: GetUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [GetUserComponent, NavbarComponent];

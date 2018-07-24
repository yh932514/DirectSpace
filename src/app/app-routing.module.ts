import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './main/home/home.component';
import {AppointmentComponent} from './main/appointment/appointment.component';
import {OurstoryComponent} from './main/ourstory/ourstory.component';
import { ThankYouComponent } from './main/thank-you/thank-you.component';
import { SignupComponent } from './main/signup/signup.component';
import { LoginComponent } from './main/login/login.component';
import { HelpComponent } from './main/help/help.component';
import { ProfileComponent } from './main/profile/profile.component';

import { UserComponent } from './admin/user/user.component';

const routes: Routes = [
  {path: '', pathMatch: 'prefix', component: HomeComponent},
  {path: 'index', redirectTo: ''},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'ourstory', component: OurstoryComponent},
  {path: 'thank-you', component: ThankYouComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'help', component: HelpComponent},
  {path: 'admin/user', component: UserComponent},
  {path: 'profile', component: ProfileComponent},
  //also add component page on app.module.ts
  // otherwise redirect to home
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

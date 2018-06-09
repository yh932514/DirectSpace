import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './main/home/home.component';
import {SettingsProfileComponent} from './main/settings-profile/settings-profile.component';
import {AppointmentComponent} from './main/appointment/appointment.component';
import {AppConfig} from './config/app.config';

const routes: Routes = [
  {path: '', pathMatch: 'prefix', component: HomeComponent},
  {path: 'index', redirectTo: ''},
  {path: 'settings-profile', component: SettingsProfileComponent},
  {path: 'appointment', component: AppointmentComponent},
  //also add component page on app.module.ts
  // otherwise redirect to home
  {path: '**', redirectTo: '/' + AppConfig.routes.home}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

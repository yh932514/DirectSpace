import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './main/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
//  {path: '', component: HomeComponent},
//  {path: AppConfig.routes.settings-profile, loadChildren: './main/main.module#MainModule'},
  
  // otherwise redirect to home
 // {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

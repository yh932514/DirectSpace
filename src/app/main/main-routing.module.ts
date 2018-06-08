import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SettingsProfileComponent} from './settings-profile/settings-profile.component';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main.component';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: '', component: SettingsProfileComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class MainRoutingModule {
}
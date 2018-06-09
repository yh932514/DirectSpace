import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SettingsProfileComponent} from './settings-profile/settings-profile.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {MainComponent} from './main.component';

const mainRoutes: Routes = [
  {
  	  {path: '',component:  MainComponent},
      {path: 'settings-profile', component: SettingsProfileComponent},
      {path: 'appointment', component: AppointmentComponent}
    
    
  }
];

@NgModule({
  imports: [ RouterModule.forChild(mainRoutes) ],
  exports: [RouterModule]
})

export class MainRoutingModule {
}
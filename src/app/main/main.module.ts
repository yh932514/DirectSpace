import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';

import {SettingsProfileComponent} from './settings-profile/settings-profile.component';
import {MainComponent} from './main.component';
import {AppointmentComponent} from './appointment/appointment.component';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
//import {DirectspaceService} from './directspace.service';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    SettingsProfileComponent,
    AppointmentComponent,
    OurstoryComponent,
    ThankYouComponent
  ]
})

export class MainModule {
}
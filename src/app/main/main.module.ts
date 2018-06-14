import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import {MainRoutingModule} from './main-routing.module';

import {SettingsProfileComponent} from './settings-profile/settings-profile.component';
import {MainComponent} from './main.component';
import {AppointmentComponent} from './appointment/appointment.component';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    BrowserModule,
    HttpClientModule,
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
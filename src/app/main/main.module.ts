import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MainRoutingModule} from './main-routing.module';

import {SettingsProfileComponent} from './settings-profile/settings-profile.component';
import {MainComponent} from './main.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {OurstoryComponent} from './ourstory/ourstory.component';
import {ThankYouComponent} from './thank-you/thank-you.component';
import {UserService} from './services/user.service';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {HelpComponent} from './help/help.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserModule /* or CommonModule */,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainComponent,
    SettingsProfileComponent,
    AppointmentComponent,
    OurstoryComponent,
    ThankYouComponent,
    SignupComponent,
    LoginComponent,
    HelpComponent
  ],
  providers: [
    UserService
  ]
})

export class MainModule {
}

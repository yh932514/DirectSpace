import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_CONFIG, AppConfig} from './config/app.config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameModule } from './frame/frame.module';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { SettingsProfileComponent } from './main/settings-profile/settings-profile.component';
import {AppointmentComponent} from './main/appointment/appointment.component';
import {OurstoryComponent} from './main/ourstory/ourstory.component';

import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
	SettingsProfileComponent, 
	AppointmentComponent,
	OurstoryComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	FrameModule,
	AppRoutingModule
  ],
  providers: [
  {provide: APP_CONFIG, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {UserService} from './user.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameModule } from './frame/frame.module';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { SettingsProfileComponent } from './main/settings-profile/settings-profile.component';
import {AppointmentComponent} from './main/appointment/appointment.component';
import {OurstoryComponent} from './main/ourstory/ourstory.component';
import { ThankYouComponent } from './main/thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsProfileComponent, 
    AppointmentComponent,
    OurstoryComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FrameModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

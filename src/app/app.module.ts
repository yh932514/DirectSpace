import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameModule } from './frame/frame.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

import { HomeComponent } from './main/home/home.component';
import { SettingsProfileComponent } from './main/settings-profile/settings-profile.component';
import {AppointmentComponent} from './main/appointment/appointment.component';
import {OurstoryComponent} from './main/ourstory/ourstory.component';
import { ThankYouComponent } from './main/thank-you/thank-you.component';
import { SignupComponent } from './main/signup/signup.component';
import { LoginComponent } from './main/login/login.component';
import { HelpComponent } from './main/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsProfileComponent, 
    AppointmentComponent,
    OurstoryComponent,
    ThankYouComponent,
    SignupComponent,
    LoginComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    HttpClientModule,
     // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    FrameModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

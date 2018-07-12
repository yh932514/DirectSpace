import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FrameModule} from './frame/frame.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

import {HomeComponent} from './main/home/home.component';
import {SettingsProfileComponent} from './main/settings-profile/settings-profile.component';
import {AppointmentComponent} from './main/appointment/appointment.component';
import {OurstoryComponent} from './main/ourstory/ourstory.component';
import {ThankYouComponent} from './main/thank-you/thank-you.component';
import {SignupComponent} from './main/signup/signup.component';
import {LoginComponent} from './main/login/login.component';
import {HelpComponent} from './main/help/help.component';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './admin/user/user.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OhioMaterialModule} from './main/core/ohio-material.module';


import { AuthService } from './main/services/auth.service';
import { UserService } from './main/services/user.service';
import { AppointmentService } from './main/services/appointment.service';


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
    HelpComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    FrameModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    OhioMaterialModule
  ],
  providers: [
    AuthService,
    AppointmentService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MainRoutingModule} from './main-routing.module';

import {SettingsProfileComponent} from './settings-profile/settings-profile.component';
import {MainComponent} from './main.component';
//import {DirectspaceService} from './directspace.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainComponent,
    SettingsProfileComponent,
  ],
})

export class HeroesModule {
}
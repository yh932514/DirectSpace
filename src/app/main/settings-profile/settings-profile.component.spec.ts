import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';

import { SettingsProfileComponent } from './settings-profile.component';
import { MainModule } from '../main.module'
import {APP_CONFIG, AppConfig} from '../../config/app.config';

describe('SettingsProfileComponent', () => {
  let component;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
	  imports:[
	  	MainModule
	  ],
      providers: [
        {provide: APP_CONFIG, useValue: AppConfig},
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
    })
    .compileComponents();
	
	fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

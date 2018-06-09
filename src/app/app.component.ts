import { Component, OnInit } from '@angular/core';

import {Meta, Title} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';
import {AppConfig} from './config/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
//  this.title = 'app';
  
  constructor(
              private title: Title,
              private meta: Meta,
              private router: Router) {}
  
  ngOnInit() { }
}


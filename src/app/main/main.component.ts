import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

//import { HeroService }  from './hero.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit{

  constructor(private location: Location, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {}

}

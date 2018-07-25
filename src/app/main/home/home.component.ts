import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../../config/app.config';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}
  ngOnInit() {
     // this.page$ = this.route.paramMap
     // .switchMap((params: ParamMap) => { this.selectedPage = params.get('subpage');
     //  return this.location.getPage();})
  }

}

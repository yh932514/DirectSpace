import { Component, OnInit } from '@angular/core';
import { USERS } from '../../mock-users';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  users = USERS;
  constructor() { }
  ngOnInit() {
  }

}

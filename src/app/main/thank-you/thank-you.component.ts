import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
      this.getUsers ();
  }
   getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
}

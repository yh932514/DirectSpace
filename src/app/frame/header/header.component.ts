import { Component, OnInit } from '@angular/core';
import {APP_CONFIG, AppConfig} from '../../config/app.config';
import {IAppConfig} from '../../config/iapp.config';
import { AuthService } from '../../main/services/auth.service';
import { UserService } from '../../main/services/user.service';
import { User } from '../../main/domain/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appConfig: any;
  res: any;
  user: User;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser('').subscribe(user => {
      this.user = user;
    });
  }

}

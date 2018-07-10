import {Component, OnInit} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {User} from '../domain/user';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  loading: boolean;
  user: User;
  error: string;

  constructor(private authService: AuthService, private userService: UserService, public snackBar: MatSnackBar) {

  }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.authService.login(this.email, this.password).subscribe(res => {

      console.log(res);
      if (!res.result.error) {
        this.authService.setToken(res.result.user.token);
        this.userService.getUser('?email=' + res.result.user.email).subscribe(user => {
          console.log(user);
          this.user = user;
        });
      }
      else {
        this.snackBar.open('Unable to log you in, please contact system admin for help', 'close', {
          duration: 2000,
        });
        // this.error = 'Unable to log you in, please contact system admin for help';
      }
      this.loading = false;
    });

  }

}

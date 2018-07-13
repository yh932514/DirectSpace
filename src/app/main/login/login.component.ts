import {Component, OnInit, ElementRef} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {User} from '../domain/user';
import {MatSnackBar} from '@angular/material';
import { Appointment } from '../domain/appointment';
import{AppointmentService} from '../services/appointment.service'
import { observable } from 'rxjs';

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
  res:any;

  model = new Appointment ('','','','',0,'','','','',0 ,'','','','','');

  constructor(private authService: AuthService,private appointmentService: AppointmentService, private userService: UserService, public snackBar: MatSnackBar, private elementRef:ElementRef) {
  }

  ngOnInit() {
  }

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
  }

  login() {
    this.loading = true;
    this.authService.login(this.email, this.password).subscribe(res => {

      console.log(res);
      this.res = res;
      if (this.res.user) {
        this.authService.setToken(this.res.user.token);
        this.userService.getUser('?email=' + this.res.user.email).subscribe(user => {
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

  appDetail(app:Appointment){
    this.model = app;
  }

  updateApp(){
    console.log(this.model);
    this.appointmentService.updateApp(this.model).subscribe(function(something){
      console.log(something);
    });
    document.getElementById("editApp").style.display = "none";
  }

  remove(app:Appointment){
    alert("remove");
  }

}

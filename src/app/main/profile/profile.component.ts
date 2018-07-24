import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../domain/user';
import { Appointment } from '../domain/appointment';
import { AppointmentService } from '../services/appointment.service';
import { Router } from '@angular/router';
import { componentRefresh } from '../../../../node_modules/@angular/core/src/render3/instructions';
import * as $ from 'jquery'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  res: any;
  user: User;
  model = new Appointment('', '', '', '', null, '', '', '', '', null, '', '', '', '', '', '');
  uModel = new User('','', '',null,'','','', '','','',null, '', '');

  constructor(private authService: AuthService, private userService: UserService, private appointmentService: AppointmentService, private router: Router, private elementRef: ElementRef) { }

  ngOnInit() {
    this.userService.getUser('').subscribe(user => {
      this.user = user;
    });

    $( "#account" ).ready(function(){
      console.log("bbbb");
      $("#pro").on("click", function () {
        $("#app").removeClass("active");
        $("#pro").addClass("active");
        $("#profile").show();
        $("#appointment").hide();
      });
      $("#app").on("click", function () {
        console.log("aaaaaa");
        $("#pro").removeClass("active");
        $("#app").addClass("active");
        $("#profile").hide();
        $("#appointment").show();
      });
    });

  }

  app(){
    console.log("aaaaaa");
        $("#pro").removeClass("active");
        $("#app").addClass("active");
        $("#profile").hide();
        $("#appointment").show();
  }

  appDetail(app: Appointment) {
    this.model = app;
  }

  userDetail(user: User) {
    this.uModel = user;
  }

  updateApp() {
    this.appointmentService.updateApp(this.model).subscribe(function (something) {
    });
    document.getElementById("editApp").style.display = "none";
  }

  updateUser(){
    this.userService.updateUser(this.uModel).subscribe(function (something) {
    });
    document.getElementById("editProfile").style.display = "none";
  }

  remove(app: Appointment, ele: Element) {
    this.appointmentService.deleteApp(app).subscribe(function (something) {
      if (something.result) {
        //refresh
        this.app = new Appointment('', '', '', '', null, '', '', '', '', null, '', '', '', '', '', '');
        console.log(app);
        //this.router.navigate(['/profile']);
      }
    });
  }
  refresh() {
    this.router.navigate(['/profile']);
  }
}

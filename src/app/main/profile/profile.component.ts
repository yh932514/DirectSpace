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
  model = new Appointment('', '', '', '', 0, '', '', '', '', 0, '', '', '', '', '', '');

  constructor(private authService: AuthService, private userService: UserService, private appointmentService: AppointmentService, private router: Router, private elementRef: ElementRef) { }

  ngOnInit() {
    this.userService.getUser('').subscribe(user => {
      this.user = user;
      this.userService.setter(user);
    });

    $(window).bind("load", function(){
      console.log($("#appointment"));
      $("#pro").click(function () {
        $("#app").removeClass("active");
        $("#pro").addClass("active");
        $("#profile").show();
        $("#appointment").hide();
      });
      $("#app").click(function () {
        $("#pro").removeClass("active");
        $("#app").addClass("active");
        $("#profile").hide();
        $("#appointment").show();
      });
    });

  }


  appDetail(app: Appointment) {
    this.model = app;
  }

  updateApp() {
    this.appointmentService.updateApp(this.model).subscribe(function (something) {
    });
    document.getElementById("editApp").style.display = "none";
  }

  remove(app: Appointment, ele: Element) {
    this.appointmentService.deleteApp(app).subscribe(function (something) {
      if (something.result) {
        //refresh
        console.log(this);
        //this.router.navigate(['/profile']);
      }
    });
  }
  refresh() {
    this.router.navigate(['/profile']);
  }
}

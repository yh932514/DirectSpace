import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import { User } from '../domain/user';
import { Appointment } from '../domain/appointment';
import {AppointmentService} from '../services/appointment.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  res:any;
  user:User;
   model = new Appointment ('','','','',0,'','','','',0 ,'','','','','', '');
  // model: Appointment;

  constructor(private authService: AuthService, private userService: UserService, private appointmentService:AppointmentService) { }

  ngOnInit() {
    console.log("asdf",this.authService.getToken());
    this.userService.getUser('').subscribe(user => {
      console.log(user);
      this.user = user;
      this.userService.setter(user);
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
    alert(app);
   this.appointmentService.deleteApp(app).subscribe(function(something){
      console.log(something);
      if(something.result){
        //refresh
      }
    });
  }

}

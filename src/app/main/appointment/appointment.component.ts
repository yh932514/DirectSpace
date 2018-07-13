import { Component, OnInit } from '@angular/core';
import {Appointment} from '../domain/appointment';
import {AppointmentService } from '../services/appointment.service';
import {UserService} from '../services/user.service';
import {Router}from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {//implements OnInit

  model = new Appointment ('','','','',0,'','','','',0 ,'','','','','');
  //('First Name', 'Last Name', 'Email', 'phone',Address','Apt' , 'City', 'State', 12345, 'Room', '');

  constructor(private appointmentService: AppointmentService, private userService: UserService, public router: Router) { }

  ngOnInit() {}

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    this.newApp(this.model);
    this.router.url==='/thank-you'; //go to /thank-you page. cannot check whether successfully create user and appointment
  }

  newApp(model: Appointment): void {
    console.log(model);
    this.userService.createUser({
      firstName: model.firstName,
      lastName: model.lastName,
      email: model.email,
      username: model.lastName +' '+ model.lastName,
      userType: 'customer'
    }).subscribe(user => {
      model.userId = user._id;
      this.appointmentService.newApp(model)
      .subscribe(abc => this.model=abc);
    })

  }

  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value;
  }

}

import { Component, OnInit } from '@angular/core';
import {Appointment} from '../../appointment';
import {AppointmentService } from '../../appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'], 
  providers: [ AppointmentService ],
})
export class AppointmentComponent {//implements OnInit
  appointments: Appointment[];

  model = new Appointment ('','','','','','','',0 ,'','');
  //('First Name', 'Last Name', 'Email', 'Address','Apt' , 'City', 'State', 12345, 'Room', '');

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {}

  submitted = false;

  onSubmit() { this.submitted = true; console.log("yes");
            this.newApp(this.model);}

  newApp(model: Appointment): void {
  //  const newAppointment: Appointment = model as Appointment;
  console.log(model);
    this.appointmentService.newApp(model)
    .subscribe(appointment => this.appointments.push(appointment));
    console.log("yes3");
  }

  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }

}

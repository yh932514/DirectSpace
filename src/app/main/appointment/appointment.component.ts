// import {Component, OnInit} from '@angular/core';
// import {Appointment} from '../domain/appointment';
// import {AppointmentService} from '../services/appointment.service';
// import {UserService} from '../services/user.service';
// import {Router} from '@angular/router';
//
// @Component({
//   selector: 'app-appointment',
//   templateUrl: './appointment.component.html',
//   styleUrls: ['./appointment.component.scss']
// })
// export class AppointmentComponent {//implements OnInit
//
//   model = new Appointment('', '', '', '', 0, '', '', '', '', 0, '', '', '', '', '', '');
//
//   //('First Name', 'Last Name', 'Email', 'phone',Address','Apt' , 'City', 'State', 12345, 'Room', '');
//
//   constructor(private appointmentService: AppointmentService, private userService: UserService, public router: Router) {
//   }
//
//   ngOnInit() {
//   }
//
//   submitted = false;
//
//   onSubmit() {
//     this.submitted = true;
//     this.newApp();
//     this.router.url === '/thank-you'; //go to /thank-you page. cannot check whether successfully create user and appointment
//   }
//
//   newApp(): void {
//     let model = this.model;
//     this.userService.createUser({
//       firstName: model.firstName,
//       lastName: model.lastName,
//       email: model.email,
//       username: model.email,
//       address1: model.address1,
//       address2: model.address2,
//       state: model.state,
//       zip: model.zip,
//       userType: 'customer',
//       status: 'active'
//     }).subscribe(user => {
//       model.userId = user._id;
//       model.status = 'created';
//       this.appointmentService.newApp(model)
//         .subscribe(abc => model = abc);
//     });
//
//   }
//
//   showFormControls(form: any) {
//     return form && form.controls['name'] &&
//       form.controls['name'].value;
//   }
//
// }

import {Component, OnInit} from '@angular/core';
import {Appointment} from '../domain/appointment';
import {AppointmentService} from '../services/appointment.service';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})

export class AppointmentComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  model = new Appointment('', '', '', '', null, '', '', '', '', null, '', '', '', '', '', '');
  password: string;
  isRegistered: boolean;

  constructor(private _formBuilder: FormBuilder, private appointmentService: AppointmentService,
              private userService: UserService, public router: Router) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.newApp();
    this.router.url === '/thank-you'; //go to /thank-you page. cannot check whether successfully create user and appointment
  }

  newApp(): void {

    this.userService.fetchUser('?email=' + this.model.email).subscribe(user => {
        console.log(user);
        const model = this.model;
        this.appointmentService.setAppointment(this.model);
        this.isRegistered = (user.registered);
        if (!user.error && !user.registered) {
          this.userService.createUser({
            firstName: model.firstName,
            lastName: model.lastName,
            email: model.email,
            username: model.email,
            address1: model.address1,
            address2: model.address2,
            state: model.state,
            zip: model.zip,
            userType: 'customer',
            status: 'active'
          }).subscribe(newUser => {
            model.userId = newUser._id;
            model.status = 'created';
            this.appointmentService.newApp(model)
              .subscribe(appointment => this.appointmentService.setAppointment(appointment));
          });
        } else {
          model.userId = user._id;
          this.appointmentService.newApp(model)
            .subscribe(appointment => this.appointmentService.setAppointment(appointment));
        }
      }
    );


  }

  signUp(): void {
    const password = this.password;
    this.userService.fetchUser('?email=' + this.model.email).subscribe(user => {
      this.userService.register({
        _id: user._id,
        password: password
      }).subscribe(result => {
        console.log(result);
        console.log(this);
      });
    });

    console.log(this.password)
    ;
  }

// showFormControls(form: any) {
//   return form && form.controls['name'] &&
//     form.controls['name'].value;
// }
}

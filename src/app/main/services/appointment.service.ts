import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {put, post, remove} from '../core/http-util';
import {Appointment} from '../domain/appointment';
import {AuthService} from './auth.service';
import {parseLazyRoute} from '@angular/compiler/src/aot/lazy_routes';
import { url } from 'inspector';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AppointmentService {

  private appointment: Appointment;
  private appointmentUrl: string;  // URL to web api

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  /** PUT: add an new appointment */
  newApp(appointment: Appointment): Observable<Appointment> {
    return put(this.http, environment.host + '/appointment', appointment, this.authService.getToken());
  }

  updateApp(appointment: Appointment): Observable<Appointment> {
    console.log('check payload');
    console.log(appointment);

    return post(this.http, environment.host + '/appointment', appointment, this.authService.getToken());
  }

  deleteApp(appointment: Appointment) {
    console.log('delete');
    const url = environment.host+'/appointment?_id='+appointment._id;
    console.log(appointment);
    return remove(this.http, url, appointment, this.authService.getToken());
  }

  setAppointment(appointment:Appointment){
    this.appointment = appointment;
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

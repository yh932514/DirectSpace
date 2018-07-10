import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {put} from '../core/http-util';
import {Appointment} from '../../appointment';
import {AuthService} from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AppointmentService {

  private appointmentUrl: string;  // URL to web api

  constructor(private http: HttpClient, private authService: AuthService) {
    this.appointmentUrl = 'http://ec2-18-222-59-12.us-east-2.compute.amazonaws.com:3001/api/appointment';
  }

  /** PUT: add an new appointment */
  newApp(appointment: Appointment): Observable<Appointment> {
    return put(this.http, environment.host + '/appointment', appointment, this.authService.getToken());
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

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {get} from '../core/http-util';
import {environment} from '../../../environments/environment';
import {AuthService} from './auth.service';
import {User} from '../../user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class UserService {

  private usersUrl: string;  // URL to web api

  constructor(private http: HttpClient, private authService: AuthService) {
    this.usersUrl = environment.host + '/user';
  }

  /** GET users from the server */
  getUsers(query): Observable<User[]> {
    // return this.http.get<User[]>(this.usersUrl + query, token)
    //   .pipe(
    //     //  tap(users => console.log(`fetched users`)),
    //     catchError(this.handleError('getUsers', []))
    //   );

    return get(this.http, this.usersUrl + query, this.authService.getToken());
  }

  getUser(query): Observable<User> {
    return get(this.http, this.usersUrl + query, this.authService.getToken());
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

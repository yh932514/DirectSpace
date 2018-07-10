/**
 * Description: A set of http utility functions.
 */

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {BasicResponse, buildErrorResponse} from './response';

export function get(http: HttpClient, url: string, token?: string): Observable<any> {

  return http.get<BasicResponse>(url, {
    headers: {Authorization: `Bearer ${token}`}
  }).pipe(
    map(resp => {
      return resp;
    }),
    catchError(err => {
      const resp = buildErrorResponse(err);
      return of(resp);
    })
  );
}


export function put(http: HttpClient, url: string, payload: any, token?: string): Observable<any> {
  return http.put<any>(`${url}`, payload, {
    headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${token}`)
  }).pipe(
    map(resp => {
      return resp;
    }),
    catchError(err => {
      const resp = buildErrorResponse<BasicResponse>(err);
      return of(resp);
    })
  );
}


export function post(http: HttpClient, url: string, payload: any, token?: string): Observable<any> {
  return http.post<any>(`${url}`, payload, {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  }).pipe(
    map(resp => {
      return <BasicResponse>{success: true, result: resp};
    }),
    catchError(err => {

      const resp = buildErrorResponse<BasicResponse>(err);
      return of(resp);
    })
  );
}

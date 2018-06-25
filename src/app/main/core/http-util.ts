/**
 * Description: A set of http utility functions.
 */

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BasicResponse, buildErrorResponse } from './response';

export function get(http: HttpClient, url: string, method?: string): Observable<BasicResponse> {
  method = method || '';

  return http.get<BasicResponse>(url).pipe(
    map(resp => {
      return <BasicResponse>{ success: true, result: resp };
    }),
    catchError(err => {
      const resp = buildErrorResponse(err);
      return of(resp);
    })
  );
}


export function put(http: HttpClient, url: string, payload: any): Observable<BasicResponse> {
  return http.put<BasicResponse>(`${url}`, payload, {
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

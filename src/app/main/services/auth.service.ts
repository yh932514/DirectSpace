import {Injectable} from '@angular/core';
import {post} from '../core/http-util';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {BasicTemplateAstVisitor} from 'codelyzer/angular/templates/basicTemplateAstVisitor';
import {BasicResponse} from '../core/response';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';


@Injectable()
export class AuthService {
  token: any;
  refreshPromise: Promise<any> = null;

  constructor(private http: HttpClient) {
  }

  login(email, password): Observable<BasicResponse> {

    const payload = {
      user:
        {
          email: email,
          password: password
        }
    };

    return post(this.http, environment.host + '/user/login', payload);
  }

  logout(): any {
    return null;
  };

  setToken(token): any {
    this.token = token;
    return token;
  };


  getToken(): string {
    return this.token;
  };
}

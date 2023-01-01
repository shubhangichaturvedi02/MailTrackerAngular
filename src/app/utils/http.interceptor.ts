import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(public auth: AuthService,
              public router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: this.auth.getToken(),
      }
    });
    return next.handle(request)

      .pipe( tap(() => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            console.log(err.error);
            if (err.status !== 401) {
              return;
            }
            if (err.hasOwnProperty('error') && err.error && err.error.hasOwnProperty('msg')) {
              if (err.error.msg === 'Token has been revoked') {
                this.router.navigate(['auth/login']).then();
              }
            }
            return;
          }
        }));
  }
}


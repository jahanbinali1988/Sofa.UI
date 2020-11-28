import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { Notification } from 'src/app/common/utilities/notification/notification'
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private notificationService: Notification
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(catchError(err => {
      if (err.status === 400) {
        if (err.error.message) {
          return throwError(err.error.message);
        } else {
          return throwError('خطا در برقراری ارتباط! لطفا با ادمین سامانه تماس بگیرید');
        }
      } else if (err.status === 401) {
        this.authenticationService.logout();
      } else if (err.status === 0) {
        this.notificationService.error('خطا در برقراری ارتباط! لطفا با ادمین سامانه تماس بگیرید');
      }

      const error = err.message || err.statusText;
      return throwError(error);
    }));
  }
}


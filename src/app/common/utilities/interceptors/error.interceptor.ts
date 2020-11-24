import { Injectable } from '@angular/core';
import {     HttpClient,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Notification } from 'src/app/common/utilities/notification/notification';
import { Router } from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private notifier: Notification,
    private http: HttpClient
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            const response = event.body;
            console.log(response);
            if (response) {
              if (response.status === 403) {
                this.router.navigateByUrl('/notAuthorized');
                this.notifier.info( 'شما سطح دسترسی برای انجام عملیات مزبور را ندارید' );
            } else if (response.status === 400) {
                this.router.navigateByUrl('/login');
                this.notifier.warn('مقادیر وارد شده را اصلاح کنید' );
            } else if (response.status === 401) {
                this.router.navigateByUrl('/login');
                this.notifier.default( 'برای انجام عملیات مزبور باید ابتدا وارد شوید' );
            } else {
                this.notifier.error( 'اشکال در برقراری ارتباط با سرور' );
            }
            throw response;
            }
          }
        })
      );
  }
}

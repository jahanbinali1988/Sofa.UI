import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { Notification } from 'src/app/common/utilities/notification/notification';
import { Router } from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private notifier: Notification
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
        if (err.status === 403) {
            this.router.navigateByUrl('/notAuthorized');
            this.notifier.info( 'شما سطح دسترسی برای انجام عملیات مزبور را ندارید' );
        } else if (err.status === 400) {
            this.router.navigateByUrl('/login');
            this.notifier.warn('مقادیر وارد شده را اصلاح کنید' );
        } else if (err.status === 401) {
            this.router.navigateByUrl('/login');
            this.notifier.default( 'برای انجام عملیات مزبور باید ابتدا وارد شوید' );
        } else {
            this.notifier.error( 'اشکال در برقراری ارتباط با سرور' );
        }
        throw err;
    }));
  }
}

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { Notification } from 'src/app/common/utilities/notification/notification';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,
        public notifier: Notification) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUserToken = this.authenticationService.authenticationToken();
        if (currentUserToken) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + currentUserToken) });
        }

        // if (!request.headers.has('Content-Type')) {
        //     request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        // }

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if(event.status == 200)
                    this.notifier.success("شما وارد سیستم شدید");
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                console.warn(data);
                return throwError(error);
            }));
    }
}

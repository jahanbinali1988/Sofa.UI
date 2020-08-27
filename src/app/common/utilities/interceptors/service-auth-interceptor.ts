import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/internal/operators';
import { NotifierService } from 'angular-notifier';

@Injectable()

export class ServiceAuthInterceptor implements HttpInterceptor {

   constructor( private router: Router, private notifier: NotifierService) {
    }

    /**
     * intercept all XHR request, set jwt for wach request
     * @param request
     * @param next
     * @returns {Observable<A>}
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('jwt')) {
        request = request.clone({
            setHeaders: {
                jwt: `Bearer ` + localStorage.getItem('jwt')
            }
        });
    }
    /**
     * continues request execution
     */
    return next.handle(request).pipe(catchError((error, caught) => {
        this.handleAuthError(error);
        return of(error);
        }) as any);
    }


    /**
     * manage errors
     * @param err
     * @returns {any}
     */
    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        // handle your auth error or rethrow
        if (err.status === 403) {
            this.router.navigateByUrl('notAuthorized');
            this.notifier.notify( 'info', 'شما سطح دسترسی برای انجام عملیات مزبور را نداید' );
        } else if (err.status === 400) {
            this.router.navigateByUrl('/internalFlights/');
            this.notifier.notify( 'error', 'برای انجام عملیات مزبور باید ابتدا وارد شوید' );
        } else if (err.status === 401) {
            this.router.navigateByUrl('/login');
            this.notifier.notify( 'default', 'برای انجام عملیات مزبور باید ابتدا وارد شوید' );
        } else {
            console.log(err);
            // this.notifier.notify( 'error', 'اشکال در برقراری ارتباط با سرور' );
        }
        throw err;
    }
}

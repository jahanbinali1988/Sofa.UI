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
import { ConfigService } from '../../services/Config.Service';
import { Config } from '../../models/base/config';
import { BrowserStorage } from '../storage/browser-storage';
import { Notification } from 'src/app/common/utilities/notification/notification'
 
@Injectable()

export class ServiceAuthInterceptor implements HttpInterceptor {
    config : Config;
   constructor( private router: Router,
    private configService: ConfigService,
    private browserStorage: BrowserStorage,
    private notifier: Notification) {
        this.config = configService.Get();
    }

    /**
     * intercept all XHR request, set jwt for wach request
     * @param request
     * @param next
     * @returns {Observable<A>}
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var token = this.browserStorage.get(this.config.Token);
        if (token) {
        request = request.clone({
            setHeaders: {
                jwt: `Bearer ` + token
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
            this.router.navigateByUrl('/notAuthorized');
            this.notifier.info( 'شما سطح دسترسی برای انجام عملیات مزبور را ندارید' );
        } else if (err.status === 400) {
            this.router.navigateByUrl('/login');
            this.notifier.warn('برای انجام عملیات مزبور باید ابتدا وارد شوید' );
        } else if (err.status === 401) {
            this.router.navigateByUrl('/login');
            this.notifier.default( 'برای انجام عملیات مزبور باید ابتدا وارد شوید' );
        } else {
            console.log(err);
            this.notifier.error( 'اشکال در برقراری ارتباط با سرور' );
        }
        throw err;
    }
}

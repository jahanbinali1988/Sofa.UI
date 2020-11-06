import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Notification} from 'src/app/common/utilities/notification/notification';
import {tap} from 'rxjs/operators';
import { ServerValidation } from '../validators/server-validation';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor(private notifier: Notification,
              private serverValidation: ServerValidation) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            const response = event.body;
            if (response) {
              if (!response.isSuccess && response.type !== 'FeatureCollection') {
                if (response.validationResults) {
                  this.serverValidation.messageBus.next(response.validationResults);
                }
                throw new Error(response.message);
              }
            }
          }
        })
      );
  }
}

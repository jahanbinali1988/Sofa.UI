import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class Notification {

  constructor(private notifier : NotifierService) {
    
  }

  info(message: string, keepAfterNavigationChange = false) {
    this.notifier.notify("info", message );
  }

  success(message: string, keepAfterNavigationChange = false) {
    this.notifier.notify("success", message );
  }

  error(message: string, keepAfterNavigationChange = false) {
    this.notifier.notify("error", message );
  }

  warn(message: string, keepAfterNavigationChange = false) {
    this.notifier.notify("warning", message );
  }
}



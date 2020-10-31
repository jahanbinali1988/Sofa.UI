import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class Notification {

  constructor(private notifier : NotifierService) {
  }

  default(message: string){
    this.notifier.notify("default", message );
  }

  info(message: string) {
    this.notifier.notify("info", message );
  }

  success(message: string) {
    this.notifier.notify("success", message );
  }

  error(message: string) {
    this.notifier.notify("error", message );
  }

  warn(message: string) {
    this.notifier.notify("warning", message );
  }
}



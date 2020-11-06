import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ValidationResult } from 'src/app/common/models/base/validation-result.model';

@Injectable({ providedIn: 'root' })
export class ServerValidation {
  messageBus = new Subject();

  validate(formName) {
    this.messageBus.subscribe(
      (value: ValidationResult[]) => {
        value.forEach(x => {
          const fieldName = x.propertyNames[0];
          const formControlName = fieldName.charAt(0).toLowerCase() + fieldName.substring(1, fieldName.length);
          const formControl = formName.controls[formControlName];
          const message = x.validationMessage;
          formControl.setErrors({
            message
          });
        });
      });
  }

}

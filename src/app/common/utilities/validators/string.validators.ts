import { AbstractControl, ValidationErrors } from '@angular/forms';

export class StringValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string) != null) {
            if ((control.value as string).search(' ') >= 0) {
                return { cannotContainSpace: true };
            }
        }
    }
}

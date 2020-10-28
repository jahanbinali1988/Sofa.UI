export interface IValidationResult {
    propertyNames: any[];
    validationMessage: string;
    isValid: boolean;
  }
  
  export class ValidationResult implements IValidationResult {
    propertyNames: any[];
    validationMessage: string;
    isValid: boolean;
  }
  
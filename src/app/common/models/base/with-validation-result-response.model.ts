import { IBaseResponse } from './IBaseResponse';
import { ValidationResult } from './validation-result.model';


export interface IWithValidationResponse extends IBaseResponse {
  validationResult: ValidationResult;
}

export class WithValidationResponse implements IWithValidationResponse {
  public errorMessage: string;
  public isSuccess: boolean;
  public message: string;
  public data: any;
  public responseStatusCode: number;
  public validationResult: ValidationResult;
}



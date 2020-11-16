import { ValidationResult } from './validation-result.model';

export class ResponseBase {
    IsSuccess: boolean;
    Message: string;
    ErrorMessage: string;
    ResponseStatusCode: number;
    ValidationResults: ValidationResult[];

}
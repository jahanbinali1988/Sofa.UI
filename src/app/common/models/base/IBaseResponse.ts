export interface IBaseResponse {
    errorMessage: string;
    isSuccess: boolean;
    message: string;
    responseStatusCode: number;
  }
  
  
  export class BaseResponse implements IBaseResponse {
    public errorMessage: string;
    public isSuccess: boolean;
    public message: string;
    public responseStatusCode: number;
  }
  
  
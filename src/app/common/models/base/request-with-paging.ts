import { RequestBase } from './RequesstBase';

export class RequestWithPaging extends RequestBase {
    PageIndex : number;
    PageSize : number;
    OrderedBy : string; 
    Accending : boolean; 
}
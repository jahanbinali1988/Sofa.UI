import { ResponseBase } from 'src/app/common/models/base/ResponseBase';
import { Institute } from '../../../models/instittue';

export class GetAllInstituteResponse extends ResponseBase {
    Institutes: Institute[];
}
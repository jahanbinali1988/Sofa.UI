import { ResponseBase } from 'src/app/common/models/base/ResponseBase';
import { Institute } from '../../../models/instittue';

export class GetInstituteResponse extends ResponseBase {
    Institute: Institute;
}
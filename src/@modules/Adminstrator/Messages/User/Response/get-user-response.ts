import { User } from 'src/@modules/Adminstrator/models/user';
import { ResponseBase } from 'src/app/common/models/base/ResponseBase';

export class GetUserResponse extends ResponseBase {
    User: User;
}
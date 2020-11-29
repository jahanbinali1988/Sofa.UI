import { RequestBase } from 'src/app/common/models/base/RequesstBase';

export class GetUserRequest extends RequestBase {
    UserId: string;
}
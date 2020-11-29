import { LoginRequiredRequest } from 'src/app/common/models/base/LoginRequiredRequest';

export class DeleteUserRequest extends LoginRequiredRequest {
    Id: string;
}
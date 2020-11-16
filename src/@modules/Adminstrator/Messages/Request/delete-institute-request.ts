import { LoginRequiredRequest } from 'src/app/common/models/base/LoginRequiredRequest';

export class DeleteInstituteRequest extends LoginRequiredRequest {
    Id: string;
}
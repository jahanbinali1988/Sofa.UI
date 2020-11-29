import { LoginRequiredRequest } from 'src/app/common/models/base/LoginRequiredRequest';

export class UpdateUserRequest extends LoginRequiredRequest {
    Id: string;
    UserName: string;
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    Password: string;
    Email: string;
    Role: number; 
    Level: number;
    IsActive: boolean;
    Description: string;
}
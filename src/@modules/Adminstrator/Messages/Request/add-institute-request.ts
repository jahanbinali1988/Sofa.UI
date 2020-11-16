import { LoginRequiredRequest } from 'src/app/common/models/base/LoginRequiredRequest';
import { Address } from '../../models/address';

export class AddInstituteRequest extends LoginRequiredRequest{
    Title: String;
    IsActive: Boolean;
    Address : Address;
    WebsiteUrl: String;
    Code: String;
}
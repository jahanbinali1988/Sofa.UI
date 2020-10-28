import { WithValidationResponse } from '../../../base/with-validation-result-response.model';
import { UserProfile } from '../../../UserProfile';


export class GetCurrentUserInfoResponse extends WithValidationResponse {
  public userProfile: UserProfile;
}
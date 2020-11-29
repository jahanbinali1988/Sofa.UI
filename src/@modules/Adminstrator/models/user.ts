import { UserLevelEnum } from 'src/app/common/enums/user-level-enum';
import { UserRoleEnum } from 'src/app/common/enums/user-role-enum';

export class User {
    Id: string;
    UserName: string;
    FirstName: string;
    LastName: String;
    PhoneNumber: string;
    Email: string;
    Role: UserRoleEnum;
    RoleCaption: string;
    Level: UserLevelEnum;
    LevelCaption: string;
    IsActive:boolean;
}
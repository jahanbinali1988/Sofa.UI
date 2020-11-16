export class BaseEntity
{
    Id: string;
    Description: string;
    RowVersion: number;
    CreateDate: Date;
    ModifyDate: Date;
    IsDeleted : boolean;
    IsActive: boolean;
}
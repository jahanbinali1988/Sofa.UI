import { User } from 'src/@modules/Adminstrator/models/user';

export abstract class PermissionCheckerBase<T> {   
    protected nextChecker: PermissionCheckerBase<T>;
    public abstract Check(commander: User, entity: T): boolean ;

    protected returnNextChecker(commander: User, entity: T): boolean
    {
        return this.nextChecker != null ? this.nextChecker.Check(commander, entity) : false;
    }
    public SetNextChecker(checker: PermissionCheckerBase<T>): PermissionCheckerBase<T>
    {
        this.nextChecker = checker;
        return checker;
    }
}
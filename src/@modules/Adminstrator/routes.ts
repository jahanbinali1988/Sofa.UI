import { Route } from '@angular/router';
import { HomeComponent } from 'src/app/common/components/home/home.component';
import { AuthGuard } from '../../app/common/utilities/authGurd/auth-guard.service';
import { CourseListComponent } from './pages/course/course-list/course-list.component';
import { CourseManageComponent } from './pages/course/course-manage/course-manage.component';
import { FieldListComponent } from './pages/field/field-list/field-list.component';
import { FieldManageComponent } from './pages/field/field-manage/field-manage.component';
import { InstituteListComponent } from './pages/institute/institute-list/institute-list.component';
import { InstituteManageComponent } from './pages/institute/institute-manage/institute-manage.component';
import { SessionListComponent } from './pages/session/session-list/session-list.component';
import { SessionManageComponent } from './pages/session/session-manage/session-manage.component';
import { TermListComponent } from './pages/term/term-list/term-list.component';
import { TermManageComponent } from './pages/term/term-manage/term-manage.component';

export const adminstratorRoutes: Route[] = [
    //{ path: '', component: HomeComponent, pathMatch: 'full' },
    
    { path: 'course', component: CourseListComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'course/:id', component: CourseManageComponent, pathMatch: 'full', canActivate: [AuthGuard] },

    { path: 'field', component: FieldListComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'field/:id', component: FieldManageComponent, pathMatch: 'full', canActivate: [AuthGuard] },

    { path: 'institute', component: InstituteListComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'institute/:id', component: InstituteManageComponent, pathMatch: 'full', canActivate: [AuthGuard] },

    { path: 'session', component: SessionListComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'session/:id', component: SessionManageComponent, pathMatch: 'full', canActivate: [AuthGuard] },

    { path: 'term', component: TermListComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'term/:id', component: TermManageComponent, pathMatch: 'full', canActivate: [AuthGuard] }
];

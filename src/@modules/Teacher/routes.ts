import { Route } from '@angular/router';
import { AuthGuard } from '../../app/common/utilities/authGurd/auth-guard.service';
import { LessonComponent } from './Pages/lesson/lesson.component';

export const teacherRoutes: Route[] = [
    { path: 'lesson', component: LessonComponent, pathMatch: 'full', canActivate: [AuthGuard] },
];

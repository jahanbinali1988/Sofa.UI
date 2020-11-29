import { Route } from '@angular/router';
import { HomeComponent } from 'src/app/common/components/home/home.component';
import { AuthGuard } from '../../app/common/utilities/authGurd/auth-guard.service';
import { LessonPlanListComponent } from './Pages/lesson-plan/lesson-plan-list/lesson-plan-list.component';
import { LessonPlanManageComponent } from './Pages/lesson-plan/lesson-plan-manage/lesson-plan-manage.component';
import { LessonListComponent } from './Pages/lesson/lesson-list/lesson-list.component';
import { LessonManageComponent } from './Pages/lesson/lesson-manage/lesson-manage.component';
import { PostListComponent } from './Pages/post/post-list/post-list.component';
import { PostManageComponent } from './Pages/post/post-manage/post-manage.component';

export const teacherRoutes: Route[] = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    
    { path: 'lesson', component: LessonListComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'lesson/:id', component: LessonManageComponent, pathMatch: 'full', canActivate: [AuthGuard] },

    { path: 'lessonplan', component: LessonPlanListComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'lessonplan/:id', component: LessonPlanManageComponent, pathMatch: 'full', canActivate: [AuthGuard] },

    { path: 'post', component: PostListComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'post/:id', component: PostManageComponent, pathMatch: 'full', canActivate: [AuthGuard] }
];

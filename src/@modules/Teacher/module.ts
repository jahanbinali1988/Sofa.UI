import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { teacherRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { LessonListComponent } from './Pages/lesson/lesson-list/lesson-list.component';
import { LessonManageComponent } from './Pages/lesson/lesson-manage/lesson-manage.component';
import { LessonPlanListComponent } from './Pages/lesson-plan/lesson-plan-list/lesson-plan-list.component';
import { LessonPlanManageComponent } from './Pages/lesson-plan/lesson-plan-manage/lesson-plan-manage.component';
import { PostListComponent } from './Pages/post/post-list/post-list.component';
import { PostManageComponent } from './Pages/post/post-manage/post-manage.component';

@NgModule({
    declarations: [
        LessonListComponent,
        LessonManageComponent,
        LessonPlanListComponent,
        LessonPlanManageComponent,
        PostListComponent,
        PostManageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(teacherRoutes),
        HttpClientModule
    ],
    providers: [
    ]
})
export class TeacherModule {
}

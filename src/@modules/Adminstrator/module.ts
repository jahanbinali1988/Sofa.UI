import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { adminstratorRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
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
import { InstituteService } from './services/institute.service';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserManageComponent } from './pages/user/user-manage/user-manage.component';
import { UserService } from './services/user.service';
@NgModule({
    declarations: [
        CourseListComponent,
        CourseManageComponent,
        FieldListComponent,
        FieldManageComponent,
        InstituteListComponent,
        InstituteManageComponent,
        SessionListComponent,
        SessionManageComponent,
        TermListComponent,
        TermManageComponent,
        UserListComponent,
        UserManageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(adminstratorRoutes),
        HttpClientModule
    ],
    providers: [
        InstituteService,
        UserService
    ]
})
export class AdminstratorModule {
}

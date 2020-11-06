import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { teacherRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(teacherRoutes),
        // HttpClientModule after BrowserModule.
        HttpClientModule
    ],
    providers: [
    ]
})
export class TeacherModule {
}

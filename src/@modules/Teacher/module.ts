import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { teacherRoutes } from './routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceAuthInterceptor } from '../../app/common/Utilities/Interceptors/service-auth-interceptor';
import { AuthGuard } from '../../app/common/utilities/authGurd/auth-guard.service';

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
        // Athorization and authentication
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ServiceAuthInterceptor,
            multi: true
        }
    ]
})
export class TeacherModule {
}

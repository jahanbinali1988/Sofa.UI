import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { adminstratorRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(adminstratorRoutes),
        HttpClientModule
    ],
    providers: [
    ]
})
export class AdminstratorModule {
}

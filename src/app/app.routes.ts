import { ContactUsComponent } from './common/components/contact-us/contact-us.component';
import { AboutUsComponent } from './common/components/about-us/about-us.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { NotAuthorizedComponent } from './common/components/not-authorized/not-authorized.component';
import { LoginComponent } from './common/components/login/login.component';
import { HomeComponent } from './common/components/home/home.component';
import { TeacherModule } from 'src/@modules/Teacher/module';
import { AdminstratorModule } from 'src/@modules/Adminstrator/module';

export const appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'teacher', loadChildren: ()=> TeacherModule },
    { path: 'adminstrator', loadChildren: ()=> AdminstratorModule },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'NotAuthorized', component: NotAuthorizedComponent },
    { path: '**', component: PageNotFoundComponent }
];

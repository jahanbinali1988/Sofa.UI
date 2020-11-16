import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NotifierModule } from 'angular-notifier';
import { appRoutes } from './app.routes';
import { CommonModule } from '@angular/common';

// Kendo and material design references
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// font awsome
//import { AngularFontAwesomeModule } from 'angular-font-awesome/dist/angular-font-awesome';

import { AppComponent } from './components/app/app.component';
import { MenuComponent } from './common/Components/menu/menu.component';
import { LoginComponent } from './common/components/login/login.component';
import { NotAuthorizedComponent } from './common/components/not-authorized/not-authorized.component';
import { AuthenticationService } from './common/services/authentication.service';
import { HomeComponent } from './common/components/home/home.component';
import { AboutUsComponent } from './common/components/about-us/about-us.component';
import { ContactUsComponent } from './common/components/contact-us/contact-us.component';
import { ConfigService } from './common/services/Config.Service';
import { BrowserStorage } from './common/utilities/storage/browser-storage';
import { Notification } from './common/utilities/notification/notification';
import { JwtInterceptor } from './common/utilities/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './common/utilities/interceptors/error.interceptor';
import { AuthGuard } from './common/utilities/authGurd/auth-guard.service';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import { GridModule } from '@progress/kendo-angular-grid';

  
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    NotAuthorizedComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //AngularFontAwesomeModule,
    NotifierModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{
      paramsInheritanceStrategy: 'always'
  }),
    // tslint:disable-next-line: deprecation
    HttpModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatBadgeModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    GridModule,
  ],
  providers: [
    ConfigService,
    AuthenticationService,
    BrowserStorage,
    AuthGuard,
    Notification,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true }
    
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

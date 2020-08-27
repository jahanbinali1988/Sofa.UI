import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NotifierModule } from 'angular-notifier';
import { appRoutes } from './app.routes';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// font awsome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './components/app/app.component';
import { MenuComponent } from './common/Components/menu/menu.component';
import { LoginComponent } from './common/Components/login/login.component';
import { PageNotFoundComponent } from './common/Components/page-not-found/page-not-found.component';
import { NotAuthorizedComponent } from './common/components/not-authorized/not-authorized.component';
import { LoginService } from './common/services/login.service';
import { HomeComponent } from './common/components/home/home.component';
import { AboutUsComponent } from './common/components/about-us/about-us.component';
import { ContactUsComponent } from './common/components/contact-us/contact-us.component';

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
    AngularFontAwesomeModule,
    NotifierModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    // tslint:disable-next-line: deprecation
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/Http';
import { Login } from '../models/base/Login';
import { BehaviorSubject, Subject } from 'rxjs';
import { TokenEndpointRequest } from '../models/messages/token/request/TokenEndpointRequest';
import { ConfigService } from './Config.Service';
import { BrowserStorage } from '../utilities/storage/browser-storage';
import { Notification } from '../utilities/notification/notification';
import { Config } from '../models/base/config';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  config: Config;
  apiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    })
  };

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private browserStorage: BrowserStorage,
    private notifier: Notification,
    private router: Router
  ) {
    this.config = this.configService.Get();
    this.apiUrl = this.config.API_Url;
  }

  authenticationToken(): string {
    return this.browserStorage.get(this.config.Token);
  }

  clientUserId(): string{
    return this.browserStorage.get(this.config.ClientUserId);
  }

  encodeParams(params: any): string {
    let body = '';
    Object.keys(params).forEach(key => {
      body += (key + '=' + params[key]) + '&';
    });
    return body = body.slice(0, body.length - 1);
  }

  storeToken(body: any): void {
    var decodeUserDetails = JSON.parse(window.atob(body.access_token.split('.')[1])); 
    this.browserStorage.set(this.config.Token, body.access_token);
    this.browserStorage.set(this.config.Refresh_Token, body.refresh_token);
    this.browserStorage.set(this.config.ClientUserId, decodeUserDetails.client_userId);
    this.browserStorage.set(this.config.ClientUserTitle, decodeUserDetails.client_userTitle);
    this.browserStorage.set(this.config.ClientUserRole, decodeUserDetails.client_userRole);
  }

  Login(login: Login) {
    const params: TokenEndpointRequest = {
      grant_type: this.config.GRANT_TYPE,  
      client_id: this.config.CLIENT_ID,
      client_secret: this.config.CLIENT_SECRET,
      scope: this.config.SCOPE,
      username: login.UserName,
      password: login.Password
    };
    const body: string = this.encodeParams(params);

    return this.http.post<any>(this.config.TOKEN_ENDPOINT, 
      body,
      this.httpOptions).subscribe(res => {
        if (res && res.access_token) {
          this.storeToken(res);
         } else {
            this.notifier.warn("مشخصات وارد شده صحیح نمی باشند");
          }
       }, error => {
           this.notifier.error(error);
       });;
  }

  logout(){
    this.browserStorage.removeAll();
    this.router.navigate(["/login"]);
  }
}

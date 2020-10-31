import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/Http';
import { Login } from '../models/base/Login';
import { PermissionModel } from '../models/Base/PermissionModel';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { TokenEndpointRequest } from '../models/messages/token/request/TokenEndpointRequest';
import { ConfigService } from './Config.Service';
import { BrowserStorage } from '../utilities/storage/browser-storage';
import { Config } from '../models/base/config';
import { GetCurrentUserInfoResponse } from '../models/messages/token/response/getCurrentUserInfoResponse';
import { tap } from 'rxjs/internal/operators';
@Injectable({ providedIn: 'root' })
export class LoginService {
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
    private browserStorage: BrowserStorage
  ) {
    this.config = this.configService.Get();
    this.apiUrl = this.config.API_Url;
  }

  authenticationToken(): string {
    return this.browserStorage.get(this.config.Token);
  }

  encodeParams(params: any): string {
    let body = '';
    Object.keys(params).forEach(key => {
      body += (key + '=' + params[key]) + '&';
    });
    return body = body.slice(0, body.length - 1);
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
      this.httpOptions);
  }

  getCurentUserInfo() {
    var url = `${this.apiUrl}/Profile/GetCurrentUserInfo`;
    return this.http.get(url).subscribe(res=> {
      console.log(res);
    });
  }
  
  GetPermissions(username: string): Observable<PermissionModel> {
    const result = this.http.post<PermissionModel>('http://localhost:63926/api/auth/GetPermissions', JSON.stringify(username),
      this.httpOptions);
    return result;
  }
}

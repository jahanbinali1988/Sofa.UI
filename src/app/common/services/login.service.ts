import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/Http';
import { Login } from '../models/base/Login';
import { PermissionModel } from '../models/Base/PermissionModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Connection': 'keep-alive',
      'Content-Length': '123'
    })
  };

  constructor( private http: HttpClient ) { }

  Login(login: Login) {
    console.log('ok');
    var result = this.http.post('http://localhost:63926/connect/token', JSON.stringify(login), this.httpOptions);
    console.log(result);
    return result;
  }

  GetPermissions(username: string): Observable<PermissionModel> {
    const result = this.http.post<PermissionModel>('http://localhost:63926/api/auth/GetPermissions', JSON.stringify(username),
      this.httpOptions);
    return result;
  }
}

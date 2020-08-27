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
      'Content-Type': 'application/json'
    })
  };

  constructor( private http: HttpClient ) { }

  Login(login: Login) {
    return this.http.post('http://localhost:52212/api/auth/Login', JSON.stringify(login), this.httpOptions);
  }

  GetPermissions(username: string): Observable<PermissionModel> {
    const result = this.http.post<PermissionModel>('http://localhost:52212/api/auth/GetPermissions', JSON.stringify(username),
      this.httpOptions);
    return result;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate  {
  constructor (private router: Router) {}

  canActivate() {
    const token = localStorage.getItem('jwt');
    if (token != null ) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      const expirationDate = helper.getTokenExpirationDate(token);
      const isExpired = helper.isTokenExpired(token);
      if (!isExpired) {
        return true;
      }
    }
    this.router.navigate(['/login']);
    localStorage.removeItem('jwt');
    return false;
  }
}

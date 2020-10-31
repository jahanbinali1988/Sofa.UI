import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ConfigService } from '../../services/Config.Service';
import { LoginService } from '../../services/login.service';
import { BrowserStorage } from '../storage/browser-storage';
@Injectable()
export class AuthGuard implements CanActivate  {
  config;
  constructor (private router: Router,
    private loginService : LoginService,
    private browserStorage : BrowserStorage,
    private configService : ConfigService) {
      this.config = this.configService.Get();
    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.loginService.authenticationToken();
    if (token != null ) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      const expirationDate = helper.getTokenExpirationDate(token);
      const isExpired = helper.isTokenExpired(token);
      if (!isExpired) {
        return true;
      }
    }
    this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
    this.browserStorage.remove(this.config.isTokenExpired);
    this.browserStorage.remove(this.config.isExpired);
    return false;
  }
}

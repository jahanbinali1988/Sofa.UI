import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ConfigService } from '../../services/Config.Service';
import { AuthenticationService } from '../../services/authentication.service';
import { BrowserStorage } from '../storage/browser-storage';
@Injectable()
export class AuthGuard implements CanActivate  {
  config;
  constructor (private router: Router,
    private authenticationService : AuthenticationService,
    private browserStorage : BrowserStorage,
    private configService : ConfigService) {
      this.config = this.configService.Get();
    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUserToken = this.authenticationService.authenticationToken();
    if (currentUserToken) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(currentUserToken);
      const expirationDate = helper.getTokenExpirationDate(currentUserToken);
      const isExpired = helper.isTokenExpired(currentUserToken);
      if (!isExpired) {
        return true;
      }
    } else {
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
      this.browserStorage.removeAll();
      return false;
    }

  }
}

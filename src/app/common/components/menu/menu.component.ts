import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../models/base/config';
import { ConfigService } from '../../services/Config.Service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  config: Config;
  title = 'Sofa';
  constructor(private configService: ConfigService,
    private router: Router,
    private authenticationService: AuthenticationService) {
    this.config = configService.Get();
   }

  ngOnInit(): void {
  }

  Logout(){
    this.authenticationService.logout();
    this.router.navigateByUrl('/');
  }
}

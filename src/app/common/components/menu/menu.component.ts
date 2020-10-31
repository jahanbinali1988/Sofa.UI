import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../models/base/config';
import { ConfigService } from '../../services/Config.Service';
import { BrowserStorage } from '../../utilities/storage/browser-storage';

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
    private browserStorage: BrowserStorage) {
    this.config = configService.Get();
   }

  ngOnInit(): void {
  }

  Logout(){
    this.browserStorage.remove(this.config.Token);
    this.browserStorage.remove(this.config.Refresh_Token);
    this.router.navigateByUrl('/');
  }
}

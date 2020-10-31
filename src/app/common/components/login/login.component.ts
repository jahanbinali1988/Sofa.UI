import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../../models/base/Login';
import { ConfigService } from '../../services/Config.Service';
import { LoginService } from '../../services/login.service';
import { BrowserStorage } from '../../utilities/storage/browser-storage';
import { Notification } from '../../utilities/notification/notification';
import { Config } from '../../models/base/config';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  config: Config;
  returnUrl : string;
  login = this.fb.group({
    username: ['', Validators.required],
    password: ['',[Validators.required, Validators.minLength(6)]]
  });
  
  constructor(private fb: FormBuilder, 
    private configService: ConfigService,
    private notifier: Notification,
    private browserStorage : BrowserStorage,
    private loginService : LoginService, 
    private route: ActivatedRoute,
    private router: Router) {
      this.config = configService.Get();
   }
  
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(){
    const loginObject: Login = {
      UserName: this.Username.value,
      Password: this.Password.value,
    };
    
    this.loginService.Login(loginObject).subscribe(res => {
      if(res.access_token != ""){
        this.notifier.success("شما وارد سیستم شدید");
        this.browserStorage.set(this.config.Token, res.access_token);
        this.browserStorage.set(this.config.Refresh_Token, res.refresh_token);
        //this.loginService.getCurentUserInfo();
        this.router.navigateByUrl(this.returnUrl);
      }else{
        this.notifier.warn("مشخصات وارد شده صحیح نمی باشند");
      }
    }), error=> {
      this.notifier.error("خطا در سیستم");
    };
  }

  get Username() {
    return this.login.controls.username;
  }
  get Password() {
    return this.login.controls.password;
  }
}

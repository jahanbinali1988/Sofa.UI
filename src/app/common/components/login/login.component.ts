import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../../models/base/Login';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {
  returnUrl: string;
  login = this.fb.group({
    username: ['', Validators.required],
    password: ['',[Validators.required, Validators.minLength(6)]]
  });
  
  constructor(private fb: FormBuilder, 
    private authenticationService : AuthenticationService, 
    private route: ActivatedRoute,
    private router: Router,
    ) {
   }
  
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';  
  }

  onSubmit(){
    const loginObject: Login = {
      UserName: this.Username.value,
      Password: this.Password.value,
    };
    if (this.login.invalid) {
      return;
    }
    this.authenticationService.Login(loginObject);
    this.router.navigateByUrl(this.returnUrl);
  }

  get Username() {
    return this.login.controls.username;
  }
  get Password() {
    return this.login.controls.password;
  }
}

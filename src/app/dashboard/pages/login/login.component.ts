import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../auth/services/login.service';
import * as Models from "../../../auth/models/login";
import * as Interfaces from "../../../auth/interfaces/login";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  translate: any;
  cookieService: any;
  public constructor(private router: Router, private loginService: LoginService,) {
    this.submitted = false;
    localStorage.removeItem('id_token');
    this.login = new Models.Login();
    this.passwordIsShow = `password`;
  }



  public passwordIsShow: string;
  public submitted: boolean;
  public login: Interfaces.Login;
  public loginResponse?: any;

  public thisCulture: any;

  public ngOnInit() { }

  public onSubmit(): void {
    this.submitted = true;

    if (this.loginService.getToken(this.login) == "ok") {
      this.loginResponse = "ok";
      localStorage.setItem('id_token', this.loginResponse);
      this.router.navigate(["home"]);
    }
    else {
      console.log(this.login.username + "  " + this.login.password)
      console.log(this.loginService.getToken(this.login));
      console.log(`نام‌کاربری و یا رمز‌عبور اشتباه است`)

    }
    this.submitted = false
  }

  public changePasswordState() {
    if (this.passwordIsShow == `password`) {
      this.passwordIsShow = `text`;
    } else {
      this.passwordIsShow = `password`;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../utils/auth.service";
import {NbToastrService} from "@nebular/theme";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password: string = '';
  email: string = '';
  loginResponse: any;
  loginFailed = false;

  constructor(public auth: AuthService,
              private toastrService: NbToastrService,
                private router: Router) { }

  ngOnInit(): void {
  }

  showPassword = true;

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  async login(email: string, password: string) {
    try {
      this.loginResponse = await this.auth.login(email, password);
      console.log(this.loginResponse);
      localStorage.setItem('token', this.loginResponse.access_token);
      if(this.loginResponse.is_admin) {
        this.router.navigate(['app/pages/analytics']);
      } else {
        this.router.navigate(['app/pages/mail']);
      }
    } catch (e: any) {
      this.toastrService.show(e.error.message, 'Login Failed', { status: 'warning' });
    }
  }
}

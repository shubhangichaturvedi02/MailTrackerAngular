import { Component, OnInit } from '@angular/core';
import {NbTreeGridDataSourceBuilder} from '@nebular/theme';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../utils/auth.service";
import {Router} from "@angular/router";

interface Mail {
  body: string;
  received_time: string;
  subject: string;
}
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
   maildata: Mail[] = [];
   loginResponse: any;


  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<any>,
              private http: HttpClient,
              public auth: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.fetchMailAnalytics().then();
  }


  async fetchMailAnalytics() {
    const response: Observable<any> = this.http.get('http://127.0.0.1:5000/mails_sent');
    response.subscribe((res) => {console.log(res)
      this.maildata = res.data;


    });
  }


  async logout() {
    localStorage.getItem('null');
    this.router.navigate(['auth/login']);
  }
}

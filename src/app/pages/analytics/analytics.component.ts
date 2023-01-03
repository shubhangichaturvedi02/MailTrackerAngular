import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../utils/auth.service";
import {Router} from "@angular/router";

interface Mail {
  body: string;
  sent_time: string;
  subject: string;
  user_name: string;
}
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  notmaildata: Mail[] = [];
  recmaildata: Mail[] = [];

  data = [{
    values: [],
    labels: [],
    type: 'pie'
  }];
  layout = {
    height: 400,
    width: 500,
  };

  constructor(private http: HttpClient,
              private router: Router) {
  }

    ngOnInit(): void {
      this.fetchMailAnalytics().then();
    }




  async fetchMailAnalytics() {
    const response: Observable<any> = this.http.get('http://127.0.0.1:5000/mail-analytics');
    response.subscribe((res) => {console.log(res)
      this.notmaildata = res.not_opened_mails;
      this.recmaildata = res.opened_mails;
      const resp: any[] = res.data_breakup;
      resp.forEach(e => {
        // @ts-ignore
        this.data[0].values.push(e.value);
        // @ts-ignore
        this.data[0].labels.push(e.name);
      });
    });
  }
  async logout() {
    localStorage.getItem('null');
    this.router.navigate(['auth/login']);
  }
}

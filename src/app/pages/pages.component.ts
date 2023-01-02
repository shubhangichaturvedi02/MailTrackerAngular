import { Component, OnInit } from '@angular/core';
import {NbTreeGridDataSourceBuilder} from '@nebular/theme';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface Mail {
  body: string;
  sent_time: string;
  subject: string;
  user_name: string;
}
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
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
  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<any>,
              private http: HttpClient) {
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
}

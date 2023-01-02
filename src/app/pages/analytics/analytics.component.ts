import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {



  constructor(private http: HttpClient) {
  }

    ngOnInit(): void {
      this.fetchMailAnalytics().then();
    }




  async fetchMailAnalytics() {
    const response: Observable<any> = this.http.get('http://127.0.0.1:5000/mails_sent');
    response.subscribe((res) => {console.log(res)
      // this.notmaildata = res.not_opened_mails;
      // this.recmaildata = res.opened_mails;
      // const resp: any[] = res.data_breakup;
      // resp.forEach(e => {
      //   // @ts-ignore
      //   this.data[0].values.push(e.value);
      //   // @ts-ignore
      //   this.data[0].labels.push(e.name);
      // });
    });
  }
}

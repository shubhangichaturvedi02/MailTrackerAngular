import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  selectedUserId: string = '';
  response: any = '';
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
      const response: Observable<any> = this.http.post('http://127.0.0.1:5000/login', {
        email: email,
        password: password
      });
      return new Promise((resolve, reject) => response.subscribe(res => {
        return resolve(res);
      }, (err) => {
        // HttpService.catchError(err);
        return reject(err);
      }));
  }
  getToken() {
    const token: any = localStorage.getItem('token') ;
    return token;
  }
}

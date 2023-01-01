import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  selectedUserId: string = '';

  constructor() { }

  getToken() {
    return 'undefined';
  }
}

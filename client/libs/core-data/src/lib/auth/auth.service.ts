import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  model = 'users';
  constructor(private http: HttpClient) {}

  getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  all() {
    // return this.http.get(this.getUrl());
  }

  create(user) {
    return this.http.post(`${BASE_URL}auth/sign-up`, user);
  }
}

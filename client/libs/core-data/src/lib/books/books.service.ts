import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  model = 'books';
  constructor(private http: HttpClient) {}

  getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get(this.getUrl());
  }

  create(book) {
    return this.http.post(this.getUrl(), book);
  }

  update(book) {
    return this.http.put(this.getUrlForId(book.id), book);
  }

  delete(bookId) {
    return this.http.delete(this.getUrlForId(bookId));
  }
}
